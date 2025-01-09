# module = a file containing code you want to include in your program
# use 'import' to include a module (built-in or your own)
# useful to break up a large program reusable separate files

#import math
#print(math.pi)

#import math as m
#print(m.pi)

#from math import pi
#print(pi)

from math import e

a, b, c, d, e = 1, 2, 3, 4, 5

print(e ** a)
print(e ** b)
print(e ** c)
print(e ** d)
print(e ** e)
print()

import math

print(math.e ** a)
print(math.e ** b)
print(math.e ** c)
print(math.e ** d)
print(math.e ** e)
print()

import example

result = example.pi
result2 = example.square(3)
result3 = example.cube(3)
result4 = example.circumference(3)
result5 = example.area(3)

print(result,result2,result3,result4,result5)