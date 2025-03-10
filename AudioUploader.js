import { useState } from "react";
import axios from "axios";

function AudioUploader() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post("http://localhost:5000/upload", formData);
    setText(response.data.text);
    setImageUrl(response.data.image_url);
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Generate Art</button>

      {text && <p>Detected Text: {text}</p>}
      {imageUrl && <img src={imageUrl} alt="Generated Art" />}
    </div>
  );
}

export default AudioUploader;
