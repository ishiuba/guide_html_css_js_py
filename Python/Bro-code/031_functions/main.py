# function = A block of reusable code
# place () after the function name to invoke it

def happy_birthday(name, age):
    print(f"happy birthday to {name}!")
    print(f"you are {age} years old!")
    print("happy birthday to you!")
    print()

happy_birthday("Iam", 21)

def display_invoice(username, amount, due_date):
    print(f"hello {username}")
    print(f"your bill of R${amount:.2f} is due: {due_date}")

display_invoice("IamSHIUBA", 5700, "01/07")

print("---------------------------------------------------")

#return = statement used to end a function and send a result back to the caller

def add(x, y):
    z = x + y
    return z
def subtract(x, y):
    z = x - y
    return z
def multiply(x, y):
    z = x * y
    return z
def divide(x, y):
    z = x / y
    return z

print(add(1,2))
print(subtract(1,2))
print(multiply(1,2))
print(divide(1,2))

print("---------------------------------------------------")

def create_name(fist,last)
    first = first.capitalize()
    last = last.capitalize()
    return  first + " " + last

full_name = create_name("iam", "shiuba")

print(full_name)