# collection = single "variable" used to store multiple values
# List = [] ordered and changeable. Duplicates OK
# Set = {} unordered and immutable, but Add/Remove OK. NO duplicates
# Tuple = () ordered and unchangeable. Duplicates OK. FASTER

fruits = ["apple", "orange", "banana", "coconut"]

print(fruits)
print(fruits[0])
print(fruits[:3])
print(fruits[::2])
print(fruits[::-1])

print("-----------------------------")

for fruit in fruits:
    print(fruit)

print("-----------------------------")


print(dir(fruits))
print(help(fruits))

print("-----------------------------")


print(len(fruits))

print("apple" in fruits)

print("-----------------------------")

fruits[3] = "mango"

for fruit in fruits:
    print(fruit)

fruits.append("pineapple")
fruits.remove("orange")
fruits.insert(4, "pineapple")
fruits.sort()
fruits.reverse()
fruits.clear()
#print(fruits.index("banana"))
print(fruits.count("pineapple"))
print(fruits)


print("-----------------------------")

fruits = {"apple", "orange", "banana", "coconut", "coconut"}
fruits.add("pineapple")
fruits.remove("apple")
fruits.pop()
#fruits.clear()

print(fruits)
print(dir(fruits))

print("-----------------------------")

fruits = ("apple", "orange", "banana", "coconut", "coconut")
for fruit in fruits:
    print(fruit)

print(fruits)
print(dir(fruits))
print(fruits.count("coconut"))