//text to image generation: https://rapidapi.com/omniinferapi/api/omniinfer/ 
//generate two images: before vs. after representing the emotional state

import axios from 'axios';
import React, { useState } from 'react';

const ImageGenerator = () => {
  const [text, setText] = useState('');
  const [images, setImages] = useState('');

  const generateImages = async () => {
    const options = {
      method: 'POST',
      url: 'https://omniinfer.p.rapidapi.com/v2/txt2img',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '653a490034mshe9e183172034f8ep134075jsn8d07de363aa5',
        'X-RapidAPI-Host': 'omniinfer.p.rapidapi.com',
      },
      data: {
        // Customize your API request parameters here
        negative_prompt: 'YOUR_NEGATIVE_PROMPT',
        sampler_name: 'Euler a',
        batch_size: 1,
        n_iter: 1,
        steps: 20,
        cfg_scale: 7,
        seed: -1,
        height: 400, // Set the desired height
        width: 600, // Set the desired width
        model_name: 'meinamix_meinaV9.safetensors',
        prompt: text, // Use the input text as the prompt
      },
    };

    try {
      const response = await axios.request(options);
      setImages(response.data.image_url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='image-container'>
      <div>
      <form className="form3" onSubmit={(e) => e.preventDefault()}>
      <label>
      <h1 className='imageRepTitle'>Create Image to Represent Your Current Emotion</h1>
      <textarea
        className="area3"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text for image generation">
        </textarea>
        </label>
      <br></br>
      <button className='button3' onClick={generateImages}>Submit to Generate Images</button>
      </form>
      </div>

      <div>
      <div>
      <h1 className='imageTitle'>AI Generated Image Display</h1>
      </div >
      <div className='imageDisplay'>
      {images && (
        <img
          src={images}
          alt="Generated Image"
          style={{
            width: '400px', // Set the width to your desired size
            height: '300px', // Set the height to your desired size
          }}
        />
      )}
      </div>
      </div>
      </div>
  );
};

export default ImageGenerator;

