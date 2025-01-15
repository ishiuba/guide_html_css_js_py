# PYTHON READING FILES (.txt, .json, .csv)
import json, csv

file_path = '../070_file-writing/output.csv'

try:
    with open(file_path, 'r') as file:
        #content = file.read() #txt
        #content = json.load(file) #json
        content = csv.reader(file) #csv
        for line in content: #csv
            print(line)
        #print(content)
except FileNotFoundError:
    print('that file was not found')
except PermissionError:
    print('you do not have permission to read that file')
