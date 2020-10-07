# -*- coding: utf-8 -*-

n = [int(i) for i in input().split()]
maiorAB = (n[0] + n[1] + abs(n[0] - n[1]))/2
maiorC = (n[2] + maiorAB + abs(n[2] - maiorAB))/2

print(f"{round(maiorC)} eh o maior")

