class Chord:

    sharpToFlat = {
        "C#": "Db",
        "D#": "Eb",
        "F#": "Gb",
        "G#": "Ab",
        "A#": "Bb",
    }

    def __init__(self, notes, name):
        self.notes = self.__convertNotes(notes)
        self.name = name

    def __repr__(self):
        return f"{self.name} => {self.notes}"
    
    def getNotes(self):
        return self.notes
    
    def getName(self):
        return self.name
    
    def __convertNotes(self, notesArray):
        for i in range(len(notesArray)):
            if notesArray[i] in self.sharpToFlat:
                notesArray[i] = self.sharpToFlat.get(notesArray[i])
        return notesArray