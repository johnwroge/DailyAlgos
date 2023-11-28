def pthFactor(n, p):
    for i in range(1, math.floor(math.sqrt(n) + 1)):
        if n % i == 0:
            p -= 1
            if p == 0:
                return i  
    for i in range(int(n**0.5), 0, -1):
        if i**2 == n:
            continue
        if n % i == 0:
            p -= 1
            if p == 0:
                return n // i
    return 0