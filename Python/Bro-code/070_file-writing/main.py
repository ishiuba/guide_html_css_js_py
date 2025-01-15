# PYTHON WRITING FILES (.txt. .json, .csv)

# employees = ['Eugene', 'Squidward', 'Spongebob', 'Patrick']
txt_data = 'i like chocolate'

file_path = 'output.txt'

with open(file_path, 'w') as file:
    #for employee in employees:
        #file.write(employee + "\n")
    file.write(txt_data)
    print(f'txt file "{file_path}" was created')

try:
    with open(file_path, 'x') as file:
        file.write(txt_data)
        print(f'txt file "{file_path}" was created')
except FileExistsError:
    print('that file already exists!')

with open(file_path, 'a') as file:
    file.write("\n" + txt_data)
    print(f'txt file "{file_path}" was created')

print()

import json

employee = {
    'name': 'SPONGEBOB',
    'age': 30,
    'job': 'COOK'
}

file_path = 'output.json'

try:
    with open(file_path, 'w') as file:
        json.dump(employee, file, indent=4)
        print(f'json file "{file_path}" was created')
except FileExistsError:
    print('that file already exists!')

print()

import csv

employees = [['NAME', 'AGE', 'JOB'], ['spongebob', 30, 'cook'], ['patrick', 37, 'unemployed'], ['sandy', 27, 'scientist']]

file_path = 'output.csv'

try:
    with open(file_path, 'w', newline='') as file:
        writer = csv.writer(file)
        for row in employees:
            writer.writerow(row)
        print(f'csv file "{file_path}" was created')
except FileExistsError:
    print('that file already exists!')

