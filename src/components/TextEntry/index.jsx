import React, { useState } from "react";
import axios from "axios";
import TextAnalysisReport from "../TextAnalysisReport";

const TextEntry = ({ onNegativeSentencesChange }) => {
  const [textEntered, setTextEntered] = useState("");
  const [sentenceSentiments, setSentenceSentiments] = useState([]);
  const [sentimentTotals, setSentimentTotals] = useState({
    positive: 0,
    negative: 0,
    neutral: 0,
  });

  const [sentenceEndings] = useState(["\\.", "\\?", "\\!", '\\."', '\\?"', '\\!"']);

  const handleInputChange = (e) => {
    setTextEntered(e.target.value);
  };

  const analyzeText = async () => {
    const sentences = textEntered.split(new RegExp(sentenceEndings.join("|")));

    const sentimentPromises = sentences.map(async (sentence) => {
      if (sentence.trim() === "") {
        return null;
      } else {
        const options = {
          method: "GET",
          url: "https://twinword-sentiment-analysis.p.rapidapi.com/analyze/",
          params: {
            text: sentence,
          },
          headers: {
            "X-RapidAPI-Key": "653a490034mshe9e183172034f8ep134075jsn8d07de363aa5",
            "X-RapidAPI-Host": "twinword-sentiment-analysis.p.rapidapi.com",
          },
        };

        try {
          const response = await axios(options);

          if (response.data && response.data.hasOwnProperty("type") && response.data.hasOwnProperty("score")) {
            const { type, score } = response.data;
            return { type, score, text: sentence };
          } else {
            console.error("Invalid API response or missing properties", response.data);
            return null;
          }
        } catch (error) {
          console.error("Error calling the API:", error);
          return null;
        }
      }
    });

    const resolvedPromises = await Promise.all(sentimentPromises);
    const filteredSentiments = resolvedPromises.filter((sentiment) => sentiment !== null);

    // Filter out only the sentences with negative sentiments
    const negativeSentences = filteredSentiments
      .filter((sentiment) => sentiment.type === "negative")
      .map((sentiment) => sentiment.text);

    // Call the callback function to pass the negative sentences
    onNegativeSentencesChange(negativeSentences);

    const sentimentTotals = calculateSentimentTotals(filteredSentiments);
    setSentimentTotals(sentimentTotals);
    setSentenceSentiments(filteredSentiments);
  };

  const calculateSentimentTotals = (sentiments) => {
    let positiveTotal = 0;
    let negativeTotal = 0;
    let neutralTotal = 0;

    sentiments.forEach((sentiment) => {
      if (sentiment.type === "positive") {
        positiveTotal += 1;
      } else if (sentiment.type === "negative") {
        negativeTotal += 1;
      } else {
        neutralTotal += 1;
      }
    });

    return { positive: positiveTotal, negative: negativeTotal, neutral: neutralTotal };
  };

  const handleAnalyzeClick = () => {
    analyzeText(); // Trigger the text analysis when the button is clicked
  };

  return (
    <div className="textEntry-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          <h1 className="textEntryTitle1">Step 1. Wildcard: Write Freely!</h1> <br />
          <textarea
            className="area1"
            value={textEntered}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <br />
        <button className="button1" type="button" onClick={handleAnalyzeClick}>
          Analyze Text
        </button>
      </form>
      <div className="sentimentAnalysis">
      <h1 className="textDisplayTitle">Emotion Text Sentiment Analysis Report</h1>
      <br></br>
        <TextAnalysisReport
          sentimentTotals={sentimentTotals}
          setSentimentTotals={setSentimentTotals}
          onNegativeSentencesChange={onNegativeSentencesChange} // Pass the callback function
        />
      </div>
    </div>
  );
};

export default TextEntry;


//References: https://www.sjsu.edu/writingcenter/docs/handouts/End%20Punctuation.pdf 