# D = {'name' : 'Bryan',
#     'car' : 'Toyota',
#     'animal' : 'cat',
#     'city' : 'Eugene',
#     'zipcode' : 97404}
# print(len(D))

# for key in D.keys():
#     print(key, end='')
# print()

# for key, value in D.items():
#     print(f"{key}: {value}")

def myHash1(s):
    sum = 0
    for c in s:
        sum += ord(c)
    myHash = sum % 16
    return myHash

def myHash2(s):
    sum = 0
    i = 1
    for c in s:
        sum += ord(c) * i
        i += 1
    myHash = sum % 16
    return myHash

def myHash3(s):
    myHash = hash(s) % 16
    return myHash

print(f"{myHash1("abcde")} {myHash1("edcba")}")
print(f"{myHash2("abcde")} {myHash2("edcba")}")
print(f"{myHash3("abcde")} {myHash3("edcba")}")