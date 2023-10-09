import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const TextAnalysisReport = ({ sentimentTotals }) => {
  // Check if sentimentTotals is undefined (or falsy) to prevent rendering errors
  if (!sentimentTotals) {
    return null;
  }

  // Extract totals for each sentiment
  const { positive, negative, neutral } = sentimentTotals;

  // Define data for the bar graph with custom colors
  const data = [
    { name: "Positive", value: positive, fill: "#4caf50" }, // Green for Positive
    { name: "Negative", value: negative, fill: "#f44336" }, // Red for Negative
    { name: "Neutral", value: neutral, fill: "#2196f3" }, // Blue for Neutral
  ];

  return (
    <div>
      <h1 className="textDisplayTitle">Emotion Text Sentiment Analysis Report</h1>
      <BarChart
        width={1000}
        height={900}
        data={data}
        margin={{ top: 20, right: 20, left: 20, bottom: 50 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        
        <Legend/>
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default TextAnalysisReport;
