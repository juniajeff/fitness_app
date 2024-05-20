import time

# Audio to WAV
from scipy.io.wavfile import write
import wavio as wv #if using wavio library to write wav file
import sounddevice as sd

#STT
import deepspeech
import wave
import numpy as np

folder_path = "C:/Users/soesi/fitchat_stt/" 

def record():
    freq = 16000 #sampling frequency
    duration = 10 #duration of recording
    print("How can I help you?:")
    audio = sd.rec(duration * freq, samplerate=freq, channels=1, dtype='int16') #mono-channel, 16kHz audio recording in 16-bit PCM format
    sd.wait() #record audio
    print("Now thinking...")
    write(folder_path + "recording.wav", freq, audio) #convert NumPy array to audio file

def transcribe(audio_file_path):
    model_file_path = folder_path + 'deepspeech-0.9.3-models.pbmm'
    scorer_file_path = folder_path+ 'deepspeech-0.9.3-models.scorer' #scores STT transcription
    model = deepspeech.Model(model_file_path) #load model
    model.enableExternalScorer(scorer_file_path) #activate scorer

    # open audio file
    w = wave.open(audio_file_path, 'r')
    frames = w.readframes(w.getnframes())
    audio = np.frombuffer(frames, dtype=np.int16)

    # STT
    text = model.stt(audio)
    print(text)

# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    record()
    time.sleep(2.5)
    transcribe(folder_path + 'recording.wav')
    #transcribe(folder_path + 'audio/4507-16021-0012.wav') #test
