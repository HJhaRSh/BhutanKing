import urllib.request
import re
import ssl
import sys
import os

ssl._create_default_https_context = ssl._create_unverified_context

def download_unsplash(query, filename):
    url = f"https://unsplash.com/s/photos/{query}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        # Find images
        matches = re.findall(r'(https://images\.unsplash\.com/photo-[a-zA-Z0-9\-]+)\?', html)
        if matches:
            img_url = matches[0] + "?w=1600&q=80"
            print(f"Downloading {img_url} for query '{query}'")
            urllib.request.urlretrieve(img_url, filename)
            return True
        else:
            print(f"No images found for {query}")
            return False
    except Exception as e:
        print(f"Error: {e}")
        return False

os.makedirs('public/napkin_new', exist_ok=True)
download_unsplash('napkin', 'public/napkin_new/1.jpeg')
download_unsplash('toilet-paper', 'public/napkin_new/2.jpeg')
download_unsplash('tissue-box', 'public/napkin_new/3.jpeg')
download_unsplash('paper-towel', 'public/napkin_new/11.jpeg')
download_unsplash('luxury-hotel', 'public/napkin_new/12.jpeg')
download_unsplash('factory-machine', 'public/napkin_new/13.jpeg')
download_unsplash('white-paper-texture', 'public/napkin_new/hero-bg.png')
