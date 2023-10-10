import React, { useContext, useState } from 'react';
import './App.css';
import axios from 'axios';
import TextEntry from './components/TextEntry';
import TextAnalysisReport from './components/TextAnalysisReport';
import ReframeSession from './components/ReframeSession';
import ImageGenerator from './components/ImageGenerator';
import Footer from './components/Footer';
import { mainContext } from './context/MainProvider';

function App() {
  // const [textEntered, setTextEntered] = useState("");
  // const [sentenceSentiments, setSentenceSentiments] = useState([]);
  // const [sentimentTotals, setSentimentTotals] = useState({
  //   positive: 0,
  //   negative: 0,
  //   neutral: 0,
  // });

  const {textEntered, setTextEntered, sentenceSentiments, setSentenceSentiments, 
    sentimentTotals, setSentimentTotals} = useContext(mainContext)

  const [showImageGenerator, setShowImageGenerator] = useState(false); // State to control ImageGenerator visibility
  const [negativeSentences, setNegativeSentences] = useState([]); // State to store negative sentences

  // Callback function to receive negative sentences from TextEntry
  const handleNegativeSentencesChange = (negativeSentences) => {
    setNegativeSentences(negativeSentences);
  };

  // Function to handle submission and set the value of submit
  const handleSubmit = () => {
    // Your submission logic here
    // Set showImageGenerator to true when submission is done
    setShowImageGenerator(true);
  };

  return (
    <div>
      <h1 className="headTitle">Welcome to EmoRelease: Your Emotion Outlet</h1>
      <h2 className='instructions'><br />Instructions:<br />
        Step 1. Enter Your Journal for Sentiment Analysis. Click Analyze Text to Display Result in Bar Chart. Continue if Step 2 is activated.<br />
        Step 2. Reframe or Paraphrase the Negative, Destructive Sentences into Positive, Constructive sentences. Click Submit to Activate Step 3.<br />
        Step 3. Enter Text to Generate An Image that Represents Your Current Emotion State. Click to View Image. 
      </h2>
      <div className="flex-container">
        <div>
          <TextEntry
            textEntered={textEntered}
            setTextEntered={setTextEntered}
            sentenceSentiments={sentenceSentiments}
            setSentenceSentiments={setSentenceSentiments}
            handleSubmit={handleSubmit} // Pass the handleSubmit function to TextEntry
            onNegativeSentencesChange={handleNegativeSentencesChange} // Pass the callback function
          />
        </div>
        {negativeSentences.length > 0 && (
          <div>
            <ReframeSession
              handleSubmit={handleSubmit} // Pass the handleSubmit function to ReframeSession
              showImageGenerator={showImageGenerator} // Pass the showImageGenerator state to ReframeSession
              negativeSentences={negativeSentences} // Pass the negative sentences to ReframeSession
            />
          </div>
        )}
        <div>
          {showImageGenerator && <ImageGenerator />}
          {/* Render ImageGenerator only when showImageGenerator is true */}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
