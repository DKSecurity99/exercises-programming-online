import math

v1 = [float(i) for i in input().split()]
v2 = [float(i) for i in input().split()]

x1 = v1[0]
y1 = v1[1]
x2 = v2[0]
y2 = v2[1]

p1 = math.pow((x2 - x1), 2)
p2 = math.pow((y2 - y1), 2)
ponto = math.sqrt(p1 + p2)

print(f"{round(ponto, 4)}")
