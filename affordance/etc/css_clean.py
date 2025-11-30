import pandas as pd
import os

# Load the CSV

df = pd.read_csv("data.csv")

# Clean the video_path column to keep only the filename

df['video_path'] = df['video_path'].apply(lambda x: os.path.basename(x))

# Save the cleaned CSV

df.to_csv("data_cleaned.csv", index=False)

print("✅ CSV cleaned and saved as data_cleaned.csv")