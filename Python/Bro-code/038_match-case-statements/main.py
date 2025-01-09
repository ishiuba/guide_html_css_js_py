# match-case statement (switch): an alternative to using many 'elif' statements
# execute some code if a value matches a case
# benefits: cleaner and syntax is more readable

def day_of_week(day):
    match day:
        case 1:
            return "it is sunday"
        case 2:
            return "it is monday"
        case 3:
            return "it is tuesday"
        case 4:
            return "it is wednesday"
        case 5:
            return "it is thursday"
        case 6:
            return "it is friday"
        case 7:
            return "it is saturday"
        case _:
            return "Not a valid day"

print(day_of_week(1))

print()

def is_weekend(day):
    match day:
        case "Saturday" | "Sunday":
            return True
        case "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday":
            return False
        case _:
            return False

print(is_weekend("Friday"))