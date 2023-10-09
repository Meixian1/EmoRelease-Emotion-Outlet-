import React, { useState } from "react";
import axios from "axios";
import TextAnalysisReport from "../TextAnalysisReport";

const TextEntry = () => {
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

  const API_URL = "https://twinword-sentiment-analysis.p.rapidapi.com/analyze/";

  const analyzeText = async () => {
    const sentences = textEntered.split(new RegExp(sentenceEndings.join("|")));

    const sentimentPromises = sentences.map(async (sentence) => {
      if (sentence.trim() === "") {
        return null;
      } else {
        const options = {
          method: "GET",
          url: API_URL,
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
          let score, type;

          if (response.data && response.data.sentence) {
            ({ score, type } = response.data.sentence);
          } else {
            console.error("Invalid API response or missing properties");
          }

          return { score, type, text: sentence };
        } catch (error) {
          console.error("Error calling the API:", error);
          return null;
        }
      }
    });

    const sentiments = await Promise.all(sentimentPromises);
    const filteredSentiments = sentiments.filter((sentiment) => sentiment !== null);

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

  const negativeSentences = sentenceSentiments
  .filter((sentence) => sentence.type === "negative")
  .map((sentence, index) => (
    <li key={index}>Sentence {index + 1}: {sentence.text}</li> // Use index as a key to avoid duplication
  ));

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          <h1 className="textEntryTitle1">Wildcard: Write Freely!</h1> <br />
          <textarea
            className="area1"
            value={textEntered}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <br />
        <button className="button1" type="button" onClick={analyzeText} >
          Analyze Text
        </button>
       
      </form>
    
    </div>
  );
};

export default TextEntry;


//References: https://www.sjsu.edu/writingcenter/docs/handouts/End%20Punctuation.pdf 