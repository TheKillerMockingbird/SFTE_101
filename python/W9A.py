# class Backpack:
#     def __init__(self, initial_contents = "empty"):
#         self.contents = initial_contents

#     def print_contents(self):
#         print(self.contents)

#     def fill_with(self, stuff):
#         self.contents = stuff

#     def get_contents(self):
#         return self.contents


# my_backpack = Backpack()
# my_backpack.print_contents()
# my_backpack.fill_with("moths")
# my_backpack.print_contents()

class BankAccount:
    def __init__(self, initial_balance=0):
        self._balance = initial_balance

    def check_balance(self):
        return self._balance
    
    def deposit(self, amount):
        self._balance += amount
    
    def withdraw(self, amount):
        if self._balance >= amount:
            self._balance -= amount
            return self._balance
        else:
            print("Insufficient funds.")
            return self._balance
        
bank = BankAccount(100.00)
bank.deposit(25.00)
bank.withdraw(50.00)
print("Current Balance:", bank.check_balance())