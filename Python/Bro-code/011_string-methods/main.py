name = input("Enter your full name: ")

# result = len(name)
# result = name.find("I")
# result = name.rfind("a")
# result = name.isdigit()
result = name.isalpha()

print(result)

# name = name.capitalize()
# name = name.upper()
name = name.lower()

print(name)

phone_number = input("Enter your phone number #: ")

result = phone_number.count("-")

print(result)

phone_number = phone_number.replace("-", " ")

print(phone_number)


print(help(str))

print("---------------------------")

# validate user input exercise
# 1. Username is no more than 12 characters
# 2. Username must not contain spaces
# 3. Username must not contain digits

username = input("Enter a username: ")

if len(username) > 12:
    print("Your username can't be more than 12 characters")
elif not username.find(" ") == -1:
    print("Your username can't contain spaces")
elif not username.isalpha():
    print("Your username can't contain numbers")
else:
    print(f"Welcome {username}")