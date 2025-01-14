# SORTING IN PYTHON .sort() or sorted()
# Lists[], Tuples(), Dictionaries{"":""}, Objects

# --------- LISTS ---------

fruits = ['banana', 'orange', 'apple', 'coconut']
fruits.sort()
print(fruits)
fruits.sort(reverse=True)
print(fruits)
print()
fruits2 = ('banana', 'orange', 'apple', 'coconut')
fruits2 = tuple(sorted(fruits2))
print(fruits2)
fruits2 = tuple(sorted(fruits2, reverse=True))
print(fruits2)
print()

# --------- DICTIONARIES ---------

fruits = {'banana': 105, 'orange': 73, 'apple': 72, 'coconut': 354}
fruits = dict(sorted(fruits.items()))
print(fruits)
fruits = dict(sorted(fruits.items(), key=lambda item: item[0], reverse=True))
print(fruits)
fruits = dict(sorted(fruits.items(), key=lambda item: item[1]))
print(fruits)
fruits = dict(sorted(fruits.items(), key=lambda item: item[1], reverse=True))
print(fruits)
print()


# --------- OBJECTS ---------

class Fruit:
    def __init__(self, name, calories):
        self.name = name
        self.calories = calories

    def __repr__(self):
        return f'{self.name}: {self.calories}'

fruits = [Fruit('banana', 105), Fruit('orange', 73), Fruit('apple', 72), Fruit('coconut', 354)]
print(fruits)

fruits = sorted(fruits, key=lambda fruit: fruit.name)
print(fruits)
fruits = sorted(fruits, key=lambda fruit: fruit.name, reverse=True)
print(fruits)
fruits = sorted(fruits, key=lambda fruit: fruit.calories)
print(fruits)
fruits = sorted(fruits, key=lambda fruit: fruit.calories, reverse=True)
print(fruits)
