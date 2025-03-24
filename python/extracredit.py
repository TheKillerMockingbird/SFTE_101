name_string = input("Enter your name: ")
age_string = input("Enter your age: ")

age = int(age_string)

years_to_retirement = 65 - age

print(f"Your name is {name_string} and your age is {age}. You will retire in {years_to_retirement} years.")

if years_to_retirement > 20:
    print("That's a long time from now.")
else:
    print("That's pretty soon.")

print("Here are all the years you have lived:")
for i in range(1, age + 1):
    print(i, end=" ")
print()

print("You have lived this long: " + "X" * age)

print(f"Your name starts with {name_string[0]}.")