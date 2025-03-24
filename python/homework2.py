def fibbonacci(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibbonacci(n-1) + fibbonacci(n-2)
    
fib_sequence = [fibbonacci(i) for i in range(20)]
print(fib_sequence)