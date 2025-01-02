name = input("Enter your name: ")
age = int(input("Enter your age: "))
age = age + 1

print(f"Hello {name}")
print(f"You are {age} years old")

print("---------------------------")

adjective1 = input("Enter an adjective:")
noun = input("Enter a noun: ")
adjective2 = input("Enter an adjective:")
verb = input("Enter a verb: ")
adjective3 = input("Enter an adjective:")

print(f"Today I went to a {adjective1} zoo.")
print(f"In an exhibit, I saw {noun}")
print(f"{noun} was {adjective2} and {verb}ing")
print(f"I was {adjective3}")

print("---------------------------")

length = float(input("Enter the length of a rectangle: "))
width = float(input("Enter the width of a rectangle: "))
height = float(input("Enter the height of a rectangle: "))

area = length * width
volume = length * width * height

print(f"The area is: {area}cm^2")
print(f"The area is: {volume}cm^3")

print("---------------------------")

item = input("What item would you like to buy?: ")
price = float(input("What is the price?: "))
quantity = int(input("How many would you like?: "))

total = price * quantity

print(f"You have bought {quantity} x {item}/s")
print(f"Your total is: R${round(total, 2)}")