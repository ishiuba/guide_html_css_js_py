# exception = An event that interrupts the flow of a program
#             (ZeroDivisionError, TypeError, ValueError)
#             1.try, 2.except, 3.finally

try:
    number = int(input('ENTER A NUMBER: '))
    print(1 / number)
except ZeroDivisionError:
    print("YOU CAN'T DIVIDE BY ZERO IDIOT! '-'")
except ValueError:
    print('ENTER ONLY NUMBERS PLEASE!')
except Exception:
    print('SOMETHING WENT WRONG!')
finally:
    print('DO SOME CLEANUP HERE')