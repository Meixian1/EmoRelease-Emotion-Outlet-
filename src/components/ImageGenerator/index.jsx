import React, { useState } from "react";
import axios from "axios";

const ImageGenerator = ({ submit }) => {
  const [text, setText] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [openInPopup, setOpenInPopup] = useState(false);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const generateImage = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.set("text", text);

    const options = {
      method: "POST",
      url: "https://open-ai21.p.rapidapi.com/texttoimage2",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "653a490034mshe9e183172034f8ep134075jsn8d07de363aa5",
        "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      if (response.data && response.data.url) {
        setImageURL(response.data.url);
      } else {
        console.error("Invalid API response:", response.data);
      }
    } catch (error) {
      console.error("Error calling the API:", error);
    }
  };

  const toggleView = () => {
    setOpenInPopup(!openInPopup);
  };

  return (
    <div className="image-container">
      <div>
        <form className="form3" onSubmit={(e) => e.preventDefault()}>
          <label>
            <h1 className="imageTextTitle">
             Step 3. Create Image to Represent Your Current Emotion State
            </h1>
            <textarea
              className="area3"
              value={text}
              onChange={handleInputChange}
              placeholder="Enter text for image generation"
            ></textarea>
          </label>
          <br />
          <button className="button3" onClick={generateImage}>
            Submit to Generate Images
          </button>
        </form>
      </div>

      <div>
        <div>
          <h1 className="imageTitle">Generated Image Display</h1>
        </div>

        <div className="imageDisplay">
          {submit === "done" && imageURL && (
            <>
              {openInPopup ? (
                <a
                  href={imageURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Popup
                </a>
              ) : (
                <img
                  src={imageURL}
                  alt="Generated Image"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              )}
            </>
          )}
        </div>
        <button className="toggleButton" onClick={toggleView}>
          {openInPopup ? "View on Same Page" : "View in Popup"}
        </button>
      </div>
    </div>
  );
};

export default ImageGenerator;
