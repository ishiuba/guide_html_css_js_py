# Abstract class: a class that cannot be instantiated on its own; meant to be subclassed.
#                   They can contain abstract methods, which are declared but have no implementation
#                   abstract classes benefits:
#                   1. prevents instantiation of the class itself
#                   2. requires children to use inherited abstract methods
from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def go(self):
        pass


    @abstractmethod
    def stop(self):
        pass


class Car(Vehicle):
    def go(self):
        print("You drive the car")


    def stop(self):
        print("You stop the car")
        print()


car = Car()

car.go()
car.stop()

class Motorcycle(Vehicle):
    def go(self):
        print("You ride the motorcycle")


    def stop(self):
        print("You stop the motorcycle")
        print()


motorcycle = Motorcycle()

motorcycle.go()
motorcycle.stop()

class Boat(Vehicle):
    def go(self):
        print("You seal the boat")

    def stop(self):
        print("You anchor the boat")


boat = Boat()

boat.go()
boat.stop()