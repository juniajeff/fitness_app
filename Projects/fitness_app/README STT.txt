README STT

stt.py
A Speech-to-Text (STT) Program

This program records audio from the microphone, saves the recording as a .wav file, and transcribes the speech in the .wav file into text.

Requirements:
- Python 3.9.13 (incompatible with above versions)
- Libraries: deepspeech, scipy, sounddevice, wavio (download using pip)
- STT models: deepspeech-0.9.3-models.pbmm, deepspeech-0.9.3-models.scorer

How to use: 
1. Make sure to run the program in an evnironment (virtual or otherwise) using Python3.9 as the interpretor
2. install the required libraries using the pip command
3. create a folder and put the stt.py program inside it
4. download the STT models and put them in the same folder as the python script
5. update the folder_path variable to the path of the created folder
6. execute the script
7. speak for 10 seconds once the "How can I help you?:" message pops up, and until the "Now thinking..." message.
8. the audio will be transcribed into text in the terminal

Notes: 
- STT model is calibrated to male voices with american accents. Other accents and voices might result in lower accuracy
- Once the script is run, a text line saying "How can I help you?:" will be printed on the default output. The recording will begin right after the line has been printed.
- The program will record for 10 seconds by default. This can be changed by updating the value of the 'duration' variable (unit = seconds). 
- The program will print out "Now thinking..." to mark the end of the recording.
- The transcribed text will be printed out in the default ouput (terminal). This can be changed by changing the print function used in the transcribed function.