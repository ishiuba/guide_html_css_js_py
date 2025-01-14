# recursion = a function that calls itself from within
#            helps to visualize a complex problem into basic steps
#            problems can be solved more easily iteratively or recursively
#            iterative = faster, complex
#            recursive = slower, simpler

# ITERATIVE
def walk(steps):
    for step in range(1, steps + 1):
        print(f'you take step #{step}')
        print('end of iterative')
        print()


walk(100)


def factorial(x):
    result = 1
    if x > 0:
        for y in range(1, x + 1):
            result *= y
        return result


print(factorial(10))
print()
print()


# RECURSIVE
def walk(steps):
    if steps == 0:
        return
    walk(steps - 1)
    print(f'you take step #{steps}')
    print('end of recursive')



walk(100)

print()

def factorial(x):
    if x == 1:
        return 1
    else:
        return x * factorial(x - 1)


print(factorial(10))
