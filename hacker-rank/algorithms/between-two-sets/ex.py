def getTotalX(a, b):
    # Write your code here
    result = 0
    cont = 1

    while cont <= min(b):
        div_a = 0
        div_b = 0
        
        for item in a:
            if cont % item == 0:
                div_a+=1
        for item in b:
            if item % cont == 0: 
                div_b+=1
        if div_a == len(a) and div_b == len(b):
            result+=1
        cont+=1
    return result

