# Task number 4
S = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
print("S:", S)

# Task number 5
L = S.split(", ")
print("L:", L)

# The task after 5
M = [int(x) for x in L]
print("M:", M)

# Have to keep this interesting, so task septem (Latin)
sum_M = sum(M)
print("sum:", sum_M)

# Numero ocho!
N = len(M)
print("N:", N)

# German for "No"
i = M.index(6)
print("i:", i)

# Ben Ten
T = tuple(M)
print("T:", T)

# Double ones
P = []
for x in range(1, 11):
    P.append(x ** 2)
print("P before removal:", P)

# Task 6 times 2
P.remove(16)
print("P after removal:", P)

# Unlucky task apparently
P.sort(reverse=True)
print("P sorted in reverse:", P)