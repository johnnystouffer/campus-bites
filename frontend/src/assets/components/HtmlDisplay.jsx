// src/assets/components/HtmlDisplay.jsx
import React, { useEffect, useState } from 'react';
import OpenAI from 'openai';
import api from '../../api'

const openai = new OpenAI({
  apiKey: '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', //API KEY CONSOLE LOG
  dangerouslyAllowBrowser: true // Note: This is not recommended for production
});

const GPTComponent = () => {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
      setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');

      try {
          const response = await fetch('http://localhost:8000/gpt/', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ input: inputText }),
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
      <div>
          <h1>GPT API Example</h1>
          <form onSubmit={handleSubmit}>
              <label>
                  Enter your input:
                  <input 
                      type="text" 
                      value={inputText} 
                      onChange={handleInputChange} 
                      required 
                  />
              </label>
              <button type="submit">Submit</button>
          </form>

          {responseText && (
              <div>
                  <h2>Response from GPT:</h2>
                  <p>{responseText}</p>
              </div>
          )}

          {error && (
              <div style={{ color: 'red' }}>
                  <h2>Error:</h2>
                  <p>{error}</p>
              </div>
          )}
      </div>
  );
};

export default GPTComponent;