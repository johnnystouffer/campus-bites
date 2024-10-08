import React, { useState } from 'react';
import api from '../../api'
import './GptPrompt.css'

function GptPrompt() {
    const [prompt, changePrompt] = useState("");
    const [responseText, setResponseText] = useState("");
    const [error, setError] = useState("");

    const handleSentence = (e) => {
        changePrompt(e.target.value);
    };

    const sendPrompt = async (e) => {
        e.preventDefault();
        setError('');
    
        try {
            const response = await fetch('http://localhost:8000/gpt/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ input: prompt }),
            });
    
            const data = await response.json();
            if (response.ok) {
                //print("response ok")
                setResponseText(data.output);
            } else {
                setError(data.error || 'Something went wrong');
            }
        } catch (err) {
            setError('Failed to connect to the server');
        }
    };

    return (
        <div id='overall-container'>
            <div id='submit-container'>
                <h2> What would you like to eat?</h2>
                <input id='unique-input' type="text" onChange={handleSentence} />
                <button type="submit" onClick={sendPrompt}> Send </button>
            </div>
            <div>
                <p className='output-text'>{responseText}</p>
                <p className='output-text'>{error}</p>
            </div>
        </div>
    );
}

export default GptPrompt;
