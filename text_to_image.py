import requests

def generate_art(prompt):
    api_key = "API_KEY"  # 🔴 Replace this with your actual API key
    url = "https://api.deepai.org/api/text2img"

    headers = {"Api-Key": api_key}  # ✅ Ensure correct header format
    data = {"text": prompt}

    response = requests.post(url, data=data, headers=headers)

    if response.status_code == 200:
        return response.json().get("output_url", "Error: No image URL returned")
    else:
        return f"Error: {response.status_code} - {response.text}"
