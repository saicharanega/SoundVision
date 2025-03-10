import whisper

def speech_to_text(audio_path):
    model = whisper.load_model("base")  # Uses base model (downloaded once)
    result = model.transcribe(audio_path)
    return result["text"]
