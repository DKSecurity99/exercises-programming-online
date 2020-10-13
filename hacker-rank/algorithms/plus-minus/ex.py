def plusMinus(arr):
    positivos = negativos = zeros = 0
    
    if len(arr) > 0 and len(arr) <= 100:
        for number in arr:
            if number > 0:
                positivos+=1
            elif number < 0:
                negativos+=1
            else:
                zeros+=1
    print(f"{round(positivos/len(arr), 6)}\n{round(negativos/len(arr), 6)}\n{round(zeros/len(arr), 6)}")

plusMinus([-4, 3, -9, 0, 4, 1])
