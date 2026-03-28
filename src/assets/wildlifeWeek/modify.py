import os

# Specify the folder path where your images are located
folder_path = f'E:/Projects/reactProjects/rajaSirProject/src/assets/wildlifeWeek'

# Iterate over all files in the folder
for filename in os.listdir(folder_path):
    # Check if the filename contains a space and has the correct format
    if " " in filename and filename.startswith("wildlife week"):
        # Replace spaces with underscores
        new_filename = filename.replace(" ", "_")
        
        # Get the full paths for renaming
        old_file = os.path.join(folder_path, filename)
        new_file = os.path.join(folder_path, new_filename)
        
        # Rename the file
        os.rename(old_file, new_file)
        print(f'Renamed: {old_file} -> {new_file}')
