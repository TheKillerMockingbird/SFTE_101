print('Finances Visualizer')

salary = float(input('Annual Salary:\n'))
housing = float(input('Monthly Housing:\n')) * 12
bills = float(input('Monthly Bills:\n')) * 12
food = float(input('Weekly Food:\n')) * 52
travel = float(input('Annual Travel:\n'))

if salary <= 10000:
    tax_rate = 0.10
elif salary <= 50000:
    tax_rate = 0.20
elif salary <= 100000:
    tax_rate = 0.25
else:
    tax_rate = 0.30

taxes = salary * tax_rate
post_tax_salary = salary - taxes

housing_pct = (housing / post_tax_salary) * 100
bills_pct = (bills / post_tax_salary) * 100
food_pct = (food / post_tax_salary) * 100
travel_pct = (travel / post_tax_salary) * 100
tax_pct = (taxes / salary) * 100

extra = post_tax_salary - (housing + bills + food + travel)
extra_pct = (extra / post_tax_salary) * 100

print("\n----------------------------------------------------------")
print(f"{'Category':<8} | {'Amount':>12} | {'% of Income':>7} | Bar")
print("----------------------------------------------------------")

def print_row(category, amount, percentage):
    bar = "#" * int(percentage)
    print(f"{category:<8} | ${amount:10.2f} | {percentage:6.1f}% | {bar}")

print_row("tax", taxes, tax_pct)
print_row("housing", housing, housing_pct)
print_row("bills", bills, bills_pct)
print_row("food", food, food_pct)
print_row("travel", travel, travel_pct)
print_row("extra", extra, extra_pct)

print("----------------------------------------------------------")