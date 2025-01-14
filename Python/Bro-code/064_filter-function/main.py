# filter(condition, collection) = return all elements that pass a condition

def is_passing(grade):
    return grade >= 60


grades = [91, 32, 83, 44, 75, 56, 67]

passing_grades = list(filter(is_passing, grades))

print(passing_grades)

print();print()

passing_grades = list(filter(lambda grade: grade >= 60, grades))

print(passing_grades)
