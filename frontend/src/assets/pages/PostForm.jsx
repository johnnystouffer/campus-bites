import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import api from '../../api'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants';
import "./PostForm.css"


function EventSubmissionForm() {
  const navigate = useNavigate();

  const token = localStorage.getItem(ACCESS_TOKEN);
  const refresh = localStorage.getItem(REFRESH_TOKEN);

  // State variables for each form field
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [eventName, setEventName] = useState('');
  const [address, setAddress] = useState('');
  const [caloriePerDollar, setCaloriePerDollar] = useState('');
  const [dateOfEvent, setDateOfEvent] = useState('');
  const [timeOfEvent, setTimeOfEvent] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [hostingOrganization, setHostingOrganization] = useState('');
  const [charity, setCharity] = useState(false);

  // State for handling submission status or errors
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the data object
    const postData = {
      price,
      description,
      event_name: eventName,
      address,
      calorie_per_dollar: caloriePerDollar,
      date_of_event: dateOfEvent,
      time_of_event: timeOfEvent,
      cuisine,
      hosting_organization: hostingOrganization,
      charity,
    };

    try {
      // Make the POST request to the backend API
      
      const response = await api.post('http://localhost:8000/api/deals/', postData);

      // Handle success
      setSubmissionStatus('Event submitted successfully!');
      alert("Post Uploaded! An admin or moderator will review your post")
      navigate('/')
      // Optionally, reset the form fields
      resetForm();

    } catch (error) {
      // Handle error
      setErrorMessage('Error submitting the event. Please try again.');
      console.error('Submission error:', error);
    }
  };

  // Function to reset the form fields
  const resetForm = () => {
    setPrice('');
    setDescription('');
    setEventName('');
    setAddress('');
    setCaloriePerDollar('');
    setDateOfEvent('');
    setTimeOfEvent('');
    setCuisine('');
    setHostingOrganization('');
    setCharity(false);
  };

  return (
    <div className='overall-container'>
    <div className="event-container">
      <h2>Submit an Event</h2>
      {submissionStatus && <p style={{ color: 'green' }}>{submissionStatus}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form className="post-form" onSubmit={handleSubmit}>
        {/* Price */}
        <div>
          <label>Price ($0.00 - $99.99):</label>
          <input
            id='posting'
            type="number"
            step="0.01"
            min="0"
            max="99.99"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div>
          <label>Description (max 40 chars):</label>
          <input
          id='posting'
            type="text"
            maxLength="40"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* Event Name */}
        <div>
          <label>Event Name (max 25 chars):</label>
          <input
          id='posting'
            type="text"
            maxLength="25"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>

        {/* Address */}
        <div>
          <label>Address (max 50 chars):</label>
          <input
          id='posting'
            type="text"
            maxLength="50"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        {/* Calorie per Dollar */}
        <div>
          <label>Calories per Dollar (e.g., 100.0):</label>
          <input
          id='posting'
            type="number"
            step="0.1"
            min="0"
            max="999.9"
            value={caloriePerDollar}
            onChange={(e) => setCaloriePerDollar(e.target.value)}
            required
          />
        </div>

        {/* Date of Event */}
        <div>
          <label>Date of Event:</label>
          <input
          id='posting'
            type="date"
            value={dateOfEvent}
            onChange={(e) => setDateOfEvent(e.target.value)}
            required
          />
        </div>

        {/* Time of Event */}
        <div>
          <label>Time of Event:</label>
          <input
          id='posting'
            type="time"
            value={timeOfEvent}
            onChange={(e) => setTimeOfEvent(e.target.value)}
            required
          />
        </div>

        {/* Cuisine */}
        <div>
          <label>Cuisine (max 25 chars):</label>
          <input
          id='posting'
            type="text"
            maxLength="25"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            required
          />
        </div>

        {/* Hosting Organization */}
        <div>
          <label>Hosting Organization (max 25 chars):</label>
          <input
          id='posting'
            type="text"
            maxLength="25"
            value={hostingOrganization}
            onChange={(e) => setHostingOrganization(e.target.value)}
            required
          />
        </div>

        {/* Charity */}
        <div>
          <label>Is this a charity event?</label>
          <input
          id='posting'
            type="checkbox"
            checked={charity}
            onChange={(e) => setCharity(e.target.checked)}
          />
        </div>

        {/* Submit Button */}
        <button className="submit" id="post" type="submit">Submit Event</button>
      </form>
    </div>
    </div>
  );
}

export default EventSubmissionForm;
