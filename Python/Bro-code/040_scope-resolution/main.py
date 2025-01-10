# variable scope = where a variable is visible and accessible
# scope resolution = (LEGB) Local -> Enclosed -> Global -> Built-in

def func1():
    print(x)

def func2():
    print(x)

x = 3

func1()
func2()

from math import e

def func1():
    print(e)

func1()