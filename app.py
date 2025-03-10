from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from speech_to_text import speech_to_text
from text_to_image import generate_art

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/upload", methods=["POST"])
def upload_audio():
    if "file" not in request.files:  # ✅ Ensure it matches frontend
        return jsonify({"error": "No audio file uploaded"}), 400

    audio_file = request.files["file"]
    file_path = os.path.join(UPLOAD_FOLDER, audio_file.filename)
    audio_file.save(file_path)

    # Convert Speech to Text
    text_prompt = speech_to_text(file_path)

    # Generate Image from Text
    image_url = generate_art(text_prompt)

    return jsonify({"text": text_prompt, "image_url": image_url})

if __name__ == "__main__":
    app.run(debug=True)