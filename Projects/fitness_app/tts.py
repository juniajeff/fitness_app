from gtts import gTTS
import os
import json
import datetime
import speech_recognition as sr
from google.oauth2 import service_account
from googleapiclient.discovery import build

# TTS Function using gTTS
def text_to_speech(text, lang='en'):
    filename = "C:/Users/PC/Desktop/Projects/fitness_app/output.mp3"
    tts = gTTS(text=text, lang=lang, slow=False)
    tts.save(filename)
    os.system(f"start {filename}")

# STT Function
def speech_to_text():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        audio = recognizer.listen(source)

    try:
        text = recognizer.recognize_google(audio)
        print(f"Recognized: {text}")
        return text
    except sr.UnknownValueError:
        print("Sorry, I could not understand the audio.")
        return None
    except sr.RequestError:
        print("Could not request results from Google Speech Recognition service.")
        return None

# Calendar Function
SCOPES = ['https://www.googleapis.com/auth/calendar.readonly']
SERVICE_ACCOUNT_FILE = 'C:/Users/PC/Desktop/Projects/fitness_app/service_account.json'

def get_calendar_events():
    creds = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    service = build('calendar', 'v3', credentials=creds)
    now = datetime.datetime.utcnow().isoformat() + 'Z'
    events_result = service.events().list(calendarId='primary', timeMin=now, maxResults=10, singleEvents=True, orderBy='startTime').execute()
    events = events_result.get('items', [])

    if not events:
        return 'No upcoming events found.'
    event_list = []
    for event in events:
        start = event['start'].get('dateTime', event['start'].get('date'))
        event_list.append(f"{start} - {event['summary']}")
    return event_list

# Logging workout sessions
def log_workout(session):
    filename = "workout_log.json"
    if os.path.exists(filename):
        with open(filename, 'r') as file:
            data = json.load(file)
    else:
        data = []
    
    data.append({
        "session": session,
        "timestamp": datetime.datetime.now().isoformat()
    })
    
    with open(filename, 'w') as file:
        json.dump(data, file, indent=4)
    
    text_to_speech("Workout session logged successfully.")

# Display workout progress
def display_progress():
    filename = "workout_log.json"
    if os.path.exists(filename):
        with open(filename, 'r') as file:
            data = json.load(file)
        if not data:
            text_to_speech("No workout sessions logged yet.")
            return
        
        text_to_speech("Here are your logged workout sessions:")
        for entry in data:
            session = entry["session"]
            timestamp = entry["timestamp"]
            text_to_speech(f"Session: {session} on {timestamp}")
    else:
        text_to_speech("No workout sessions logged yet.")

# Example integration
def main():
    text_to_speech("How can I assist you today?")
    command = speech_to_text()
    
    if command:
        if "schedule" in command or "calendar" in command:
            events = get_calendar_events()
            if isinstance(events, list):
                for event in events:
                    text_to_speech(event)
            else:
                text_to_speech(events)
        elif "log workout" in command or "log session" in command:
            text_to_speech("Please describe your workout session.")
            session_description = speech_to_text()
            if session_description:
                log_workout(session_description)
        elif "show progress" in command or "workout progress" in command:
            display_progress()

if __name__ == "__main__":
    main()
