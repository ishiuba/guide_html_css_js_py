# PYTHON FILE DETECTION
import os

file_path = 'stuff/test.txt'

if os.path.exists(file_path):
    print(f'THE LOCATION "{file_path}" EXISTS')

    if os.path.isfile(file_path):
        print('THAT IS A FILE')
    elif os.path.isdir(file_path):
        print('THAT IS A DIRECTORY')
else:
    print("THAT LOCATION DOESN'T EXIST")
