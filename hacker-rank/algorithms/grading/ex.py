def gradingStudents(s):
    medias = []
    media = 0
    minMedia = min(s)
    
    for note in s:
        if note % 5 > 0 and note != minMedia:
            media = note
            while media % 5 > 0:
                media+=1
            if media - note < 3:
                medias.append(media)
            else:
                medias.append(note)
    medias.append(minMedia)
    print(medias)
    return medias

gradingStudents([73, 67, 38, 33])
gradingStudents([37, 38])
