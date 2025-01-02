# Variable = A container
#            A variable behaves as if it was the value it contains

first_name = "Iam"
food = "chocolate"
email = "Iam123@fake.ch"

print(f"Hello {first_name}")
print(f"You like {food}")
print(f"Your email is: {email}")

print("---------------------------")
# Integers

age = 25
quantity = 3
num_of_students = 30

print(f"You are {age} years old")
print(f"You are buying {quantity} items")
print(f"Your class has {num_of_students} students")

print("---------------------------")

# Float
price = 10.99
gpa = 3.2
distance = 5.5

print(f"The price is R${price}")
print(f"Your gpa is: R${gpa}")
print(f"You ran {distance}km")

print("---------------------------")

# Boolean

is_student = True
for_sale = True
is_online = True

print(f"Are you a student? {is_student}")

if is_student:
    print("You are a student")
else:
    print("You are NOT a student")

if for_sale:
    print("That item is for sale")
else:
    print("That item is NOT available")

if is_online:
    print("You are online")
else:
    print("You are offline")
