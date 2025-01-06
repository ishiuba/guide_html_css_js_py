# dictionary = a collection of {key:value} pairs ordered and changeable. No duplicates

capitals = {
    "USA": "Washington D.C.",
    "India": "New Delhi",
    "China": "Beijing",
    "Russia": "Moscow"
}

if capitals.get("Japan"):
    print("That capital exists")
else:
    print("That capital doesn't exist")

print(capitals)
print(capitals.get("USA"))
print(capitals.get("Japan"))

print("----------------------------------")

capitals.update({
    "Germany": "Berlin"
})
capitals.update({
    "USA": "Detroit"
})
capitals.pop("China")
capitals.popitem()
#capitals.clear()

keys = capitals.keys()

print(capitals)
print(keys)

print("----------------------------------")


for key in capitals.keys():
    print(key)

print("----------------------------------")

values = capitals.values()
print(values)

for value in capitals.values():
    print(value)

print("----------------------------------")

items = capitals.items()
print(items)

for key, value in capitals.items():
    print(f"{key}: {value}")