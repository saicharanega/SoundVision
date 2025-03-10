# 🎨 Audio2Art - Convert Audio to AI-Generated Art

Audio2Art is a web application that converts speech from an audio file into text and generates AI-generated images based on the transcribed text using Generative AI.

## 🚀 Features
- 🎤 **Speech-to-Text**: Converts spoken words from an audio file into text using OpenAI Whisper.
- 🎨 **Text-to-Image**: Uses AI to generate an image from the transcribed text.
- 🌐 **Web Interface**: Users can upload audio files and receive generated images.
- 🔥 **Flask Backend + React Frontend**: A full-stack application built with Flask and React.

---

## 📁 Project Structure
```
audio2art/
│── backend/               # Backend (Flask API)
│   │── uploads/           # Stores uploaded audio files
│   │── venv/              # Virtual environment
│   │── app.py             # Flask API
│   │── speech_to_text.py  # Converts audio to text
│   │── text_to_image.py   # Generates art from text
│── frontend/              # Frontend (React.js)
│   │── src/
│   │   │── App.js         # Main UI
│   │   │── AudioUploader.js # Handles file uploads
│── README.md              # Project documentation
```

---

## 🛠 Installation & Setup

### ✅ **Step 1: Clone the Repository**
```sh
git clone https://github.com/your-username/audio2art.git
cd audio2art
```

### ✅ **Step 2: Backend Setup (Flask)**
```sh
cd backend
python3 -m venv venv
source venv/bin/activate  # macOS/Linux
# On Windows: venv\Scripts\activate

pip install -r requirements.txt
```

### ✅ **Step 3: Frontend Setup (React)**
```sh
cd frontend
npm install
```

---

## 🎯 Usage

### **Run the Backend**
```sh
cd backend
source venv/bin/activate  # macOS/Linux
# On Windows: venv\Scripts\activate
python app.py
```
Server will run on: `http://127.0.0.1:5000`

### **Run the Frontend**
```sh
cd frontend
npm start
```
Frontend will run on: `http://localhost:3000`

---

## 💡 How It Works
1. **User uploads an audio file** via the frontend.
2. **Backend transcribes the audio** into text using Whisper.
3. **Text is sent to AI image generation API** (e.g., OpenAI DALL·E, DeepAI, or Hugging Face).
4. **Generated image is displayed** on the frontend.

---

## 🔥 API Endpoints
### **Upload Audio File**
```http
POST /upload
```
- **Request:** `multipart/form-data`
  - `file`: (Audio file)
- **Response:**
  ```json
  {
    "text": "Transcribed text",
    "image_url": "Generated image URL"
  }
  ```

---

## 📌 Technologies Used
- **Backend**: Flask, Whisper, OpenAI API
- **Frontend**: React.js, JavaScript, HTML, CSS
- **Others**: Pydub, Flask-CORS, Node.js

---

## 🛠 Future Enhancements
- ✅ Improve UI design
- ✅ Support multiple AI image generators
- ✅ Add real-time audio recording
- ✅ Enhance speech-to-text accuracy

---

## 📜 License
This project is **open-source** and free to use under the MIT License.

---

## ⭐ Contributing
Want to improve this project? Contributions are welcome!
1. **Fork** the repository
2. **Create a feature branch** (`git checkout -b feature-name`)
3. **Commit changes** (`git commit -m "Added new feature"`)
4. **Push** to GitHub and **create a Pull Request**

---

### 🚀 Developed by SoundVision Team
