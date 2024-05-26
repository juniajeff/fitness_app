import pandas as pd

# Load the datasets
abbrev_data = pd.read_excel(r'C:\Users\asdfq\Desktop\homework_etc\semester7\fitness_app\ABBREV.xlsx')
mega_gym_data = pd.read_csv(r'C:\Users\asdfq\Desktop\homework_etc\semester7\fitness_app\megaGymDataset.csv')

# Print the column names
print("ABBREV.xlsx Columns:", abbrev_data.columns.tolist())
print("megaGymDataset.csv Columns:", mega_gym_data.columns.tolist())