import os

# File storage logic
def save_file(file):
    if isinstance(file, str):
        return file

    directory = "uploads"
    if not os.path.exists(directory):
        os.makedirs(directory)

    file_path = os.path.join(directory, file.name)
    with open(file_path, "wb") as f:
        f.write(file.read())

    return file_path
