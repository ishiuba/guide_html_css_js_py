# if = Do some code only IF some condition is True
# Else do something else

age = int(input("Enter your age: "))

if age >= 100:
    print("You are too old to sign up!")
elif age >= 18:
    print("You are now signed up!")
elif age < 0:
    print("You haven't been born yet!")
elif age == 0:
    print("You have just been born!")
else:
    print("You must be 18+ to sign up!")

print("---------------------------")

response = input("Would you like food? (Y/N): ")

if response == "Y" or response == "y":
    print("Have some food!")
elif response == "N" or response == "n":
    print("No food for you!")
else:
    print("Excuse me?")

print("---------------------------")

name = input("Enter your name: ")

if name == "":
    print("YOU DID NOT TYPE IN YOUR NAME!")
else:
    print(f"Hello {name}")

print("---------------------------")

for_sale = True

if for_sale:
    print("This item is for sale")
else:
    print("This item is NOT for sale")


online = False

if online:
    print("The user is online")
else:
    print("The user is offline")