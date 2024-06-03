import requests
from bs4 import BeautifulSoup
chordCurl = 'https://www.all-guitar-chords.com/chords/index/c'
chordC = requests.get(chordCurl)
soupC = BeautifulSoup(chordC.text, 'html.parser')
print("hello world")
print(soupC)