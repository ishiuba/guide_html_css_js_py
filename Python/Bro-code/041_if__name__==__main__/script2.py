from script1 import *

def favorite_drink(drink):
    print(f"Your favorite drink is {drink}")

def main():
    print("This is script2")
    favorite_food('cake')
    favorite_drink('water')
    print('Goodbye!')

if __name__ == '__main__':
    main()