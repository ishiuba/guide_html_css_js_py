# logical operators = used on conditional statements
# and = checks two or more conditions if True
# or = checks if at least one conditions is True
# not =True if condition is False, and vice versa

temp = 0

if temp > 0 and temp < 30:
    print("The temperature is good")
else:
    print("The temperature is bad")

temp = 25

if temp <= 0 or temp >= 30:
    print("The temperature is bad")
else:
    print("The temperature is good")

sunny = True

if not sunny:
    print("It is cloudy outside")
else:
    print("It is sunny outside")