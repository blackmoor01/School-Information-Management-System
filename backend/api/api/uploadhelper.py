import os

def save_file(file, upload_dir="uploads/"):
    # If the file is already a path, return it
    if isinstance(file, str):
        return file
    
    # Ensure the upload directory exists
    if not os.path.exists(upload_dir):
        os.makedirs(upload_dir)
    
    # Save the file and return the path
    file_path = os.path.join(upload_dir, file.filename)
    with open(file_path, "wb") as f:
        f.write(file.read())
    return file_path