"use client"
import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState('');
    const [recentPrompt, setRecentPrompt] = useState('');
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState('');

    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev +nextWord);
        }, 75 * index);
    }

    const onSet = async (prompt) => {
        setResultData('');
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);
        setPrevPrompt(prev=>[...prev,input])
        const response = await run(input);
        let responseArray = response.split('**');
        let newResponse = ''; 
        for (let i = 0; i < responseArray.length; i++) {
            if (i % 2 === 0) {
                newResponse += responseArray[i];
            } else {
                newResponse += "<br><b>" + responseArray[i] + "</b>";
            }
        }
        let newResponse2 = newResponse.split('*').join("<br>");
        let newResponseArray = newResponse2.split(' ');

        for (let i = 0; i < newResponseArray.length; i++) {
            const nextword = newResponseArray[i];
            delayPara(i, nextword + " ");
        }
        setLoading(false);
        setInput('');
    }



    const contextVAlue = {
        prevPrompt,
        setPrevPrompt,
        onSet,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        input,
        setInput,
        resultData,
    }

    return (
        <Context.Provider value={contextVAlue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;