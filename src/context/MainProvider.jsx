import React, {useState, createContext } from 'react'

export const mainContext = createContext(); 

const MainProvider = (props) => {
    const [textEntered, setTextEntered] = useState("");
    const [sentenceSentiments, setSentenceSentiments] = useState([]);
    const [sentimentTotals, setSentimentTotals] = useState({
      positive: 0,
      negative: 0,
      neutral: 0,
    });
  return (

    <mainContext.Provider value={{textEntered, setTextEntered, sentenceSentiments, setSentenceSentiments, 
        sentimentTotals, setSentimentTotals}}>
            {props.children}
        </mainContext.Provider>
  )
}

export default MainProvider