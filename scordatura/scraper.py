import requests
from bs4 import BeautifulSoup
import json
import time
from chord import Chord
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import re

browser = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))

query = "Python"

browser.get("https://www.all-guitar-chords.com/chords/index")
html = browser.page_source

chordLinks = browser.find_elements(By.CLASS_NAME, 'pr-2')

chordList = []

for i in chordLinks:
    i.click()
    for j in range(50):
        chordName = browser.find_element(By.XPATH, f'//main/div/div[{2 + j}]/div[1]/a').text
        chordNotes = browser.find_element(By.XPATH, f'//main/div/div[{2 + j}]/div[2]').text
        chordList.append(Chord(chordNotes.split(), chordName))
    browser.back()

with open('chords.json', 'w') as json_file:
    json.dump(chordList, json_file)

browser.quit()