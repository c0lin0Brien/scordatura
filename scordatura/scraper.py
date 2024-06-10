import requests
from bs4 import BeautifulSoup
import time
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import re

browser = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))

query = "Python"

browser.get("https://www.all-guitar-chords.com/chords/index/c")
html = browser.page_source

for i in range(50):
    testText = browser.find_element(By.XPATH, f'//main/div/div[{2 + i}]/div[2]')
    print(testText.text)

browser.quit()