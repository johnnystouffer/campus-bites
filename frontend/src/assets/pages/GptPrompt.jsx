import React, { useState } from 'react';
import api from '../../api'

function GptPrompt() {
    const [prompt, changePrompt] = useState("");
    const [responseText, setResponseText] = useState("");
    const [error, setError] = useState("");

    const handleSentence = (e) => {
        changePrompt(e.target.value);
    };

    const sendPrompt = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('gpt/', { input : prompt });

            const data = await response.json();
            if (response.ok) {
                setResponseText(data.output);
            } else {
                setError(data.error || 'Something went wrong');
                console.log(data.error);
            }
        } catch (err) {
            console.error(err);
            setError('Failed to connect to the server');
        }
    };

    return (
        <div className='overall-container'>
            <div>
                <h2> What would you like to eat?</h2>
                <input type="text" onChange={handleSentence} />
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
