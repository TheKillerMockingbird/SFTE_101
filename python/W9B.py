# class Dog:
#     def make_noise(self):
#         print("Woof!")

# class Poodle(Dog):
#     def appearance(self):
#         print("Fancy")

# molly = Poodle()
# molly.make_noise()
# molly.appearance()

# class Car:
#     def start(self):
#         print("power on")

#     def accelerate(self):
#         print("accelerating")

#     def cruise(self, duration):
#         print(f"driving for {duration} miles")

#     def stop(self):
#         print("stopping")

# class Trip:
#     def go(self, duration):
#         car = Car()
#         car.start()
#         car.accelerate()
#         car.cruise(duration)
#         car.stop()

# disneyland = Trip()
# disneyland.go(882)

class Food:
    def __init__(self, default_calories = 0):
        self.calories = default_calories

    def eat(self):
        print(f"eating {Food} ({self.calories} calories)")

class Spaghetti(Food):
    def eat(self):
        print(f"eating spaghetti ({self.calories} calories)")

class Breadstick(Food):
    def eat(self):
        print(f"eating breadstick ({self.calories} calories)")

class Salad(Food):
    def eat(self):
        print(f"eating salad ({self.calories} calories)")

class IceCream(Food):
    def eat(self):
        print(f"eating ice cream ({self.calories} calories)")

class Dinner:
    def eat(self):
        spaghetti = Spaghetti(500)
        breadstick = Breadstick(100)
        salad = Salad(200)
        ice_cream = IceCream(250)

        spaghetti.eat()
        breadstick.eat()
        salad.eat()
        ice_cream.eat()

if __name__ == "__main__":
    my_dinner = Dinner()
    my_dinner.eat()