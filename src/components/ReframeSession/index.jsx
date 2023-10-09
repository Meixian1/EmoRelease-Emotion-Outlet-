import React, {useState} from "react";

const ReframeSession = ({negativeSentences}) => {
  
  const[reframeSentences, setreframeSentences] = useState("")

  const handleInputChange = (e) => {
    setreframeSentences(e.target.value);
  };

  return (
    <div className="reframe-flex-container">
    <h1 className="reframeSession"> Mindset Reframing Session<br></br>Enhancing Sentiments: <br></br> Transforming Negative Sentences Positively while Preserving Original Meaning</h1>
      <ul className="negativeSentenceDisplay" >
      <h1>Your Negative Sentences:{negativeSentences}</h1>
      </ul>
    <div className="positiveSentenceDisplay">
      <form className="form2" onSubmit={(e) => e.preventDefault()}>
        <label>
        <h1>Write Your Positive Sentences:</h1>
        <textarea
            className="area2"
            value={reframeSentences}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <button className="button2" type="button">Submit</button>
      </form>
    </div>
    </div>
  )
  }
export default ReframeSession;
