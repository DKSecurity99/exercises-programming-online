def gradingStudents(s):
    for item in s:
        if item >= 38:
            media = item % 5
            if media >= 3:
                item += (5 - media)
    result.append(item)
    return result

print(gradingStudents([73, 67, 38, 33]))
