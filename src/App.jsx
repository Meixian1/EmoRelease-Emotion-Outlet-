import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import TextEntry from './components/TextEntry';
import TextAnalysisReport from './components/TextAnalysisReport';
import ReframeSession from './components/ReframeSession';
import ImageGenerator from './components/ImageGenerator';
import Footer from './components/Footer';

function App() {
  const [textEntered, setTextEntered] = useState("");
  const [sentenceSentiments, setSentenceSentiments] = useState([]); // Define state variable
  const [sentimentTotals, setSentimentTotals] = useState({
    positive: 0,
    negative: 0,
    neutral: 0,
  }); // Define state variable

  return (
    <div>
      <h1 className="headTitle">Welcome to EmoRelease: Your Emotion Outlet</h1>
      <div className="flex-container">
        <div>
        <TextEntry
          textEntered={textEntered}
          setTextEntered={setTextEntered}
          sentenceSentiments={sentenceSentiments}
          setSentenceSentiments={setSentenceSentiments}
        />
        </div>
       <div className="sentimentAnalysis" >
      <TextAnalysisReport
          sentimentTotals={sentimentTotals} setSentimentTotals={setSentimentTotals}  />
      </div>
      </div>
      {/* <div>
      <ReframeSession/>
      </div>
      <div>
      <ImageGenerator/>
      </div>
      <div>
      <Footer/>
      </div> */}
    </div>
  );
}

export default App;
