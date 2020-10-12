def sum(matriz):
    som = 0;
    if len(matriz) > 0 and matriz[-1] <= 1000:
        for item in matriz:
            som += item
    return som

print(soma([1, 2, 3]));
