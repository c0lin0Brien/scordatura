class Chord:
    def __init__(self, notes, name):
        self.notes = notes
        self.name = name

    def __repr__(self):
        return f"{self.name} => {self.notes}"
    
    def getNotes(self):
        return self.notes
    
    def getName(self):
        return self.name