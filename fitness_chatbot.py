import json
import os
import time
import wave

import deepspeech
import numpy as np
import pygame
import requests
import sounddevice as sd
from gtts import gTTS
from scipy.io.wavfile import write

# Initialize pygame mixer
pygame.mixer.init()

# Constants
folder_path = r"C:\Users\asdfq\Desktop\homework_etc\semester7\fitness_app\myproject\Projects\fitness_app\stt"
rasa_endpoint = "http://localhost:5005/webhooks/rest/webhook"  # Ensure this is the correct endpoint

# Function to play audio
def play_audio(file_path):
    pygame.mixer.music.load(file_path)
    pygame.mixer.music.play()
    while pygame.mixer.music.get_busy():
        pygame.time.Clock().tick(10)

# Function to record audio
def record():
    freq = 16000  # sampling frequency (use 16000 Hz to match DeepSpeech model)
    duration = 10  # duration of recording
    print("Recording...")
    audio = sd.rec(int(duration * freq), samplerate=freq, channels=1, dtype='int16')  # mono-channel, 16kHz audio recording in 16-bit PCM format
    sd.wait()  # record audio
    print("Recording complete.")
    write(os.path.join(folder_path, "recording.wav"), freq, audio)  # convert NumPy array to audio file
    print(f"Audio file saved at {os.path.join(folder_path, 'recording.wav')}")
    play_audio(os.path.join(folder_path, "recording.wav"))

# Function to transcribe audio using DeepSpeech
def transcribe(audio_file_path):
    model_file_path = os.path.join(folder_path, 'deepspeech-0.7.4-models.pbmm')
    scorer_file_path = os.path.join(folder_path, 'deepspeech-0.7.4-models.scorer')

    if not os.path.exists(model_file_path):
        raise FileNotFoundError(f"Model file not found at {model_file_path}")
    if not os.path.exists(scorer_file_path):
        raise FileNotFoundError(f"Scorer file not found at {scorer_file_path}")

    print("Loading model...")
    model = deepspeech.Model(model_file_path)  # load model
    model.enableExternalScorer(scorer_file_path)  # activate scorer
    print("Model loaded and scorer enabled.")

    # open audio file
    with wave.open(audio_file_path, 'r') as w:
        rate = w.getframerate()
        frames = w.readframes(w.getnframes())
        audio = np.frombuffer(frames, dtype=np.int16)

    print(f"Audio rate: {rate}, Audio shape: {audio.shape}")

    # Ensure the audio is in int16 format
    if audio.dtype != np.int16:
        audio = audio.astype(np.int16)
    print(f"Converted audio dtype: {audio.dtype}")

    # Log a snippet of the audio data
    print("Audio data snippet:", audio[:10])

    # STT
    print("Running transcription...")
    transcription = model.stt(audio)
    print(f"Transcription result: {transcription}")
    return transcription

# Function to send message to Rasa and get a response
def get_rasa_response(message):
    headers = {
        'Content-Type': 'application/json',
    }
    payload = {
        'sender': 'user',
        'message': message
    }
    print("Sending message to Rasa:", message)
    try:
        response = requests.post(rasa_endpoint, headers=headers, data=json.dumps(payload))
        print("Rasa response status code:", response.status_code)
        print("Rasa response content:", response.text)

        if response.status_code == 200:
            try:
                responses = response.json()
                if responses:
                    reply = responses[0].get('text', '')
                    print("Rasa response:", reply)
                    return reply
                else:
                    print("No responses returned by Rasa.")
            except json.JSONDecodeError:
                print("Failed to decode Rasa response.")
        else:
            print("Error from Rasa:", response.status_code, response.text)
    except requests.exceptions.RequestException as e:
        print("Request to Rasa failed:", e)
    return None

# Function to convert text to speech and play it
def text_to_speech(text):
    tts = gTTS(text=text, lang='en')
    tts_file = os.path.join(folder_path, "response.mp3")
    tts.save(tts_file)
    play_audio(tts_file)

# Main function
def main():
    record()
    print("Now thinking...")
    user_input = transcribe(os.path.join(folder_path, 'recording.wav'))
    print("Transcription: ", user_input)
    
    if user_input:
        response = get_rasa_response(user_input)
        if response:
            text_to_speech(response)

if __name__ == '__main__':
    main()