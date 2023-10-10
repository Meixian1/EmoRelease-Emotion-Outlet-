import React, { useState } from "react";
import ImageGenerator from "../ImageGenerator";

const ReframeSession = ({ negativeSentences }) => {
  const [reframeSentences, setReframeSentences] = useState("");
  const [submit, setSubmit] = useState(""); // Add state for Submit

  const handleInputChange = (e) => {
    setReframeSentences(e.target.value);
  };

  const unlockImageGenerator = () => {
    if (submit === "done") {
      return <ImageGenerator submit={submit} />; // Pass submit as a prop
    } else {
      return null;
    }
  };

  // Function to handle submission and set the value of submit
  const handleSubmit = () => {
    // Your submission logic here
    // Set the value of submit when submission is done
    setSubmit("done");
  };

  return (
    <div className="reframe-flex-container">
      <h1 className="reframeSession">
        Step 2. Mindset Reframing<br />Transforming Negative Sentences Positively while Preserving Original Meaning
      </h1>
      {negativeSentences.length > 0 && (
        <div className="negativeSentenceDisplay">
          <h1>Your Negative, Destructive Sentences:</h1>
          <ol>
            {negativeSentences.map((sentence, index) => (
              <li className="negativeSentences" key={index}>{sentence}</li>
            ))}
          </ol>
        </div>
      )}
      <div className="positiveSentenceDisplay">
        <form className="form2" onSubmit={(e) => e.preventDefault()}>
          <label>
            <h1>Write Your Positive, Constructive Sentences:</h1>
            <textarea
              className="area2"
              value={reframeSentences}
              onChange={handleInputChange}
            ></textarea>
          </label>
          <button className="button2" type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      {unlockImageGenerator()}
    </div>
  );
};

export default ReframeSession;
