# Fake News Detector for Students

Misinformation spreads quickly through online news and social media, making it increasingly difficult for students to differentiate between reliable and fake information.  
**Fake News Detector for Students** is an AI-powered platform that helps learners analyze articles, assess credibility, and get concise, trustworthy summaries—empowering them to think critically and avoid falling for false narratives.  

🔗 Live Website: [Trisha-Bej](https://rebrand.ly/Trisha-Bej)  
➡️ On the site, you can learn about the project, and by clicking **“Launch App”**, you’ll be redirected to the Streamlit app for real-time news analysis. 


<img src="images/website_qr.png" alt="Scan to visit website" width="100"/>


---

## Project Structure

This repo (`detector`) contains the **frontend website**, while the actual AI-based analysis runs from a separate backend repo:  

- Frontend (`detector`) → Simple website with project info + “Launch App” button  
- Backend (`fake_news_detector_for_students`) → Streamlit app where students can input news articles and get analysis  

👉 Backend Repo: [fake_news_detector_for_students](https://github.com/trishab004/fake_news_detector_for_students)  

---

## Features

- Frontend Website:
  - Clean landing page  
  - Overview of the project  
  - Redirect to the AI-powered news analysis tool  

- Streamlit App (Backend):
  - Paste or upload news articles  
  - AI model analyzes credibility and flags potential misinformation  
  - Generates concise, trustworthy summaries for students  

---

## Getting Started

### 1. Clone the Repos

```bash
# Frontend
git clone https://github.com/trishab004/detector.git
cd detector

# Backend (Streamlit app)
git clone https://github.com/trishab004/fake_news_detector_for_students.git
cd fake_news_detector_for_students
```

### 2. Run the Backend (Streamlit App)

```
# Inside fake_news_detector_for_students:

pip install -r requirements.txt
streamlit run app.py
```
- The app will be available locally at http://localhost:8501/

### 3. Access the Frontend

- Open the link [Trisha-Bej](https://rebrand.ly/Trisha-Bej) from the detector repo .
- Click “Launch App” → It will redirect to your hosted Streamlit app.

 
## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Python, Streamlit
- AI/ML: NLP models for credibility analysis & summarization

## Use Case

- This tool is built especially for students who rely on online news and resources. It helps them:
- Verify the reliability of articles
- Avoid misinformation traps
- Get concise summaries for better learning and research

## Roadmap

- Improve ML model accuracy with larger datasets
-  Add browser extension for quick credibility checks
-  Support multilingual news articles
-  Dashboard for tracking misinformation trends

## Contributing

- Contributions are welcome! Feel free to fork the repos and submit pull requests.

## Author

- Trisha Bej

### ✨ Fake news spreads fast, but together we can stop it from spreading further.
