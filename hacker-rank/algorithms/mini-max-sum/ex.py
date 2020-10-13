def miniMaxSum(arr):
    sumValue = maxV = minV = arr[0]

    for item in range(1, len(arr)):
        print(item)
        if maxV < arr[item]:
            maxV = arr[item]
        if minV > arr[item]:
            minV = arr[item]

        sumValue += arr[item]
    print(sumValue - maxV, sumValue - minV)

miniMaxSum([7, 69, 2, 221, 8974])
