from flask import Flask, request, jsonify
from PIL import Image, UnidentifiedImageError
from sklearn.cluster import KMeans
import numpy as np
import matplotlib.pyplot as plt
import requests
from io import BytesIO
from bs4 import BeautifulSoup
from groq import Groq
from urllib.parse import urljoin, urlparse
from dotenv import load_dotenv
import os

app = Flask(__name__)

headers={'User-Agent':'Mozilla/5.0 (Windows NT 6.3; Win 64 ; x64) Apple WeKit /537.36(KHTML , like Gecko) Chrome/80.0.3987.162 Safari/537.36'}

load_dotenv()
summary_api = os.getenv("SUMMARY_API_KEY")
tag_api = os.getenv("TAG_API_KEY")

def rgb_to_hex(rgb):
    return '#{:02x}{:02x}{:02x}'.format(*rgb)

def extract_dominant_colors(image, n_colors=10):
    # Convert image to RGB
    image = image.convert('RGB')
    # Resize image to speed up processing
    image = image.resize((100, 100))
    # Get image data
    pixels = np.array(image.getdata())
    
    # Perform k-means clustering
    kmeans = KMeans(n_clusters=n_colors, n_init='auto')
    kmeans.fit(pixels)
    # Get cluster centers (dominant colors)
    dominant_colors = kmeans.cluster_centers_.astype(int)
    
    # Convert RGB to Hex
    hex_colors = [rgb_to_hex(tuple(color)) for color in dominant_colors]
    
    # plt.figure(figsize=(8, 6))
    # plt.bar(range(len(hex_colors)), [1]*len(hex_colors), color=hex_colors)
    # plt.xticks(range(len(hex_colors)), hex_colors)
    # plt.title('Dominant Colors')
    # plt.show()
    
    return hex_colors

def fetch_images_from_url(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    image_tags = soup.find_all('img')
    
    image_urls = []
    for img in image_tags:
        img_url = img.get('src')
        if img_url:
            # Resolve relative URLs
            img_url = urljoin(url, img_url)
            # Only add URLs that have a valid scheme
            if urlparse(img_url).scheme in ('http', 'https'):
                image_urls.append(img_url)
    
    return image_urls

@app.route('/extract_colors', methods=['POST'])
def extract_colors():
    data = request.json
    if 'url' not in data:
        return jsonify({'error': 'URL is required'}), 400
    
    url = data['url']
    image_urls = fetch_images_from_url(url)
    
    result = {}
    for img_url in image_urls:
        try:
            response = requests.get(img_url)
            image = Image.open(BytesIO(response.content))
            hex_colors = extract_dominant_colors(image)
            result[img_url] = hex_colors
        except (requests.exceptions.RequestException, UnidentifiedImageError) as e:
            # Skip invalid images and continue processing
            print(f"Error processing image {img_url}: {e}")
            continue
    
    return jsonify(result)

# BELOW IS THE CODE FOR GENERATING TAGS FOR TEXT

# Set your OpenAI API key here
client = Groq(
    api_key=f"{tag_api}",
)


@app.route('/generate_tags', methods=['POST'])
def generate_tags():
    data = request.get_json()
    url = data.get('url', '')
    
    if not url:
        return jsonify({'error': 'No URL provided'}), 400
    
    text = extract_text_from_url(url)
    
    if not text:
        return jsonify({'error': 'Unable to extract text from URL'}), 500
    
    tags = generate_relevant_tags(text)
    
    return jsonify({'tags': tags})

def extract_text_from_url(url):
    try:
        response = requests.get(url,headers=headers)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, 'html.parser')
        paragraphs = soup.find_all('p')
        text = ' '.join([p.get_text() for p in paragraphs])
        print("Extracted text:", text[:500])  # Print the first 500 characters of the text
        return text
    except requests.exceptions.RequestException as e:
        print(f"Error fetching the URL: {e}")
        return None

# import logging

# logging.basicConfig(level=logging.DEBUG)

def generate_relevant_tags(text, num_tags=5):
    prompt = (
        "Generate a list of relevant tags for the following text:\n\n"
        f"{text}\n\n"
        "Tags:"
    )

    try:
        response = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": prompt,
                }
            ],
            model="llama3-8b-8192",
        )

        # logging.debug(f"Response received: {response}")

        if response and hasattr(response, 'choices') and response.choices and len(response.choices) > 0:
            # Assuming there's only one choice in the response
            message = response.choices[0].message
            if message and hasattr(message, 'content'):
                content = message.content
                # Extract tags from content
                start_index = content.find(':')  # Find the start of tags
                if start_index != -1:
                    tags_string = content[start_index + 1:].strip()
                    tags_list = tags_string.split('\n* ')
                    tags_list = tags_string.split('\n')
                    tags = [tag.strip() for tag in tags_list if tag.strip()]
                    # Return top num_tags tags
                    tags = tags[:num_tags]
                    for idx, ele in enumerate(tags):
                        tags[idx] = ele.replace('* ', '')
                    return tags
                else:
                    # logging.warning("No tags found in the response content.")
                    return []
            else:
                # logging.warning("No content found in message.")
                return []
        else:
            # logging.warning("No choices or empty response.")
            return []
    
    except Exception as e:
        # logging.error(f"Error during tag generation: {e}")
        return []
    
# BELOW IS THE CODE FOR SUMMARIZER
def generate_summary(text):
    API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"
    sum_headers = {"Authorization": f"Bearer {summary_api}"}

    def query(payload):
        response = requests.post(API_URL, headers=sum_headers, json=payload)
        return response.json()
        
    output = query({
        "inputs": text,
        "parameter":{"min_length":len(text)/2,"max_length":800} ,
    })

    actual_summary = output[0]['summary_text']

    return actual_summary

@app.route('/generate_summary', methods=['POST'])
def generate_summary_endpoint():
    data = request.get_json()
    url = data.get('url', '')
    
    if not url:
        return jsonify({'error': 'No URL provided'}), 400
    
    text = extract_text_from_url(url)
    
    if not text:
        return jsonify({'error': 'Unable to extract text from URL'}), 500
    
    tags = generate_relevant_tags(text)
    summary = generate_summary(text)
    
    return jsonify({'Summary': summary,
                    'Tags': tags,
                })

if __name__ == '__main__':
    app.run(port = 8000,debug=True)