import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [audio, setAudio] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Handles file selection
    const handleFileChange = (event) => {
        setAudio(event.target.files[0]);
        setError("");  // Clear previous errors
    };

    // Uploads the audio file to the backend
    const handleUpload = async () => {
        if (!audio) {
            setError("Please upload an audio file first.");
            return;
        }

        const formData = new FormData();
        formData.append("audio", audio);  // Ensure the key is "audio"

        setLoading(true);
        setError("");

        try {
            const response = await axios.post("http://127.0.0.1:5000/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            if (response.data.image_url) {
                setImageUrl(response.data.image_url);
            } else {
                setError("Failed to generate image.");
            }
        } catch (error) {
            console.error("Error uploading audio:", error);
            setError("An error occurred. Please try again.");
        }

        setLoading(false);
    };

    return (
        <div className="container">
            <h1>🎨 Audio to Art</h1>
            <p>Upload an audio file and generate AI art from it!</p>

            <input type="file" accept="audio/*" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={loading}>
                {loading ? "Processing..." : "Generate Image"}
            </button>

            {error && <p className="error">{error}</p>}

            {imageUrl && (
                <div className="image-container">
                    <h2>Generated Image:</h2>
                    <img src={imageUrl} alt="Generated Art" />
                </div>
            )}
        </div>
    );
}

export default App;

