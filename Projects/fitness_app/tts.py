from gtts import gTTS
import os

def text_to_speech(text, lang='en'):
    """
    Converts text to speech, saves it as an MP3 file, and plays the file.
    
    Parameters:
    - text (str): The text to be converted into speech.
    - lang (str): The language of the speech. Default is English ('en').
    """
    # Specify the output file path
    filename = "C:/Users/PC/Desktop/Projects/fitness_app/output.mp3"  # Updated path for Windows
    
    # Create a gTTS object with the specified text and language
    tts = gTTS(text=text, lang=lang, slow=False)
    
    # Save the spoken text to an MP3 file
    tts.save(filename)
    
    # Playing the audio file using the default media player on Windows
    os.system(f"start {filename}")

# Example usage:
text_to_speech("Start your workout session with a 5 minute warm up.")
