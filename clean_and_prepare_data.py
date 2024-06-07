import pandas as pd
import yaml


def clean_csv(file_path, output_path):
    # Open the CSV file and inspect for inconsistent rows
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    # Determine the number of columns from the header
    header = lines[0].strip().split(',')
    num_columns = len(header)

    # Filter out rows with incorrect number of columns
    cleaned_lines = [line for line in lines if len(line.strip().split(',')) == num_columns]

    # Write cleaned data to a new file
    with open(output_path, 'w', encoding='utf-8') as file:
        file.writelines(cleaned_lines)

# Paths to the original and cleaned CSV files
input_csv_path = r'C:\Users\asdfq\Desktop\homework_etc\semester7\fitness_app\megaGymDataset.csv'
cleaned_csv_path = r'C:\Users\asdfq\Desktop\homework_etc\semester7\fitness_app\cleaned_megaGymDataset.csv'

# Clean the CSV file
clean_csv(input_csv_path, cleaned_csv_path)

# Load the cleaned datasets
abbrev_data = pd.read_excel(r'C:\Users\asdfq\Desktop\homework_etc\semester7\fitness_app\ABBREV.xlsx')
mega_gym_data = pd.read_csv(cleaned_csv_path)

# Extract relevant columns based on actual column names
# For ABBREV.xlsx: using 'Shrt_Desc' and 'Energ_Kcal'
# For megaGymDataset.csv: using 'Title', 'Desc', 'BodyPart'

diet_tips = abbrev_data[['Shrt_Desc', 'Energ_Kcal']].dropna()
exercise_info = mega_gym_data[['Title', 'Desc', 'BodyPart']].dropna()

# Initialize lists to store intents and examples
diet_examples = []
exercise_examples = []

# Extract examples for diet tips
for index, row in diet_tips.iterrows():
    diet_examples.append(f"- {row['Shrt_Desc']} contains {row['Energ_Kcal']} kcal")

# Extract examples for exercise information
for index, row in exercise_info.iterrows():
    exercise_examples.append(f"- {row['Title']} targets primarily {row['BodyPart']}. {row['Desc']}")

# Create NLU training data in Rasa's format
nlu_data = {
    "nlu": [
        {
            "intent": "ask_diet_tips",
            "examples": "\n".join(diet_examples)
        },
        {
            "intent": "ask_exercise_info",
            "examples": "\n".join(exercise_examples)
        }
    ]
}

# Save the NLU data to a YAML file
with open(r'C:\Users\asdfq\Desktop\homework_etc\semester7\fitness_app\myproject\data\nlu.yml', 'w') as file:
    yaml.dump(nlu_data, file, sort_keys=False)

print("NLU training data has been saved to nlu.yml")