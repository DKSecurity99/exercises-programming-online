def sum(matriz):
    sumValue = 0;
    if len(matriz) > 0 and matriz[-1] <= 1000:
        for item in matriz:
            sumValue += item
    return sumValue

print(sum([1, 2, 3]));
