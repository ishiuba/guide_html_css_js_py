# Lambda function = A small anonymous function for a one time use (throw away function)
#                   They take any number of arguments, but have only 1 expression
#                   Helps keep the namespace clean and is useful with higher-order functions
#                   'sort()', 'map()', 'filter()', 'reduce()'
#                   lambda parameters: expression

double = lambda x: x * 2
print(double(4))
print()

add = lambda x, y: x + y
print(add(2, 3))
print()

max_value = lambda x, y: x if x > y else y
print(max_value(4, 5))
print()

min_value = lambda x, y: x if x < y else y
print(min_value(4, 5))
print()

full_name = lambda first, last: first + " " + last
print(full_name('Spongebob', 'Squarepants'))
print()

is_even = lambda x: x % 2 == 0
print(is_even(4))
print()

age_check = lambda age: True if age >= 18 else False
print(age_check(21))
print(age_check(17))
