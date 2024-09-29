import React, { useState, useEffect } from 'react';  // Import useEffect as well
import './Home.css'
import Login from "./Login";
import PostForm from "./PostForm.jsx";
import Register from "./Register"; 
import { Route, Routes } from 'react-router-dom';
import Card from "../components/card.jsx";
import api from '../../api.js';

function Home() {

    const [data, updateData] = useState([]);

    // Use useEffect to call the API when the component mounts
    useEffect(() => {
        const getApiData = async () => {
            try {
                const response = await api.get('api/deals/');
                console.log('we got a response lets fucking GOOOOOOOOOOOOOOOOO');
                updateData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getApiData();
    }, []);  // The empty array ensures this runs only once, on mount

    return (
        <>
            <div className="top-bar">
                <a href="/login" className="elem"> Login   </a>
                <br />
                <a href="/register" className="elem"> Register </a>
            </div>
            <div className="logo">
                <h1>~~ Campus Bites ~~</h1>
            </div>
            <div className="list-container">
                <div className="card-list">
                    {data.length > 0 ? (
                        data.map((event, index) => (
                            <Card
                                key={index}  // Add a unique key for each card
                                eventName={event.event_name}
                                orgName={event.description} // Assuming hosting_organization is not present, using description instead
                                date={event.date_of_event}
                            />
                        ))
                    ) : (
                        <p>Loading events...</p>  // Optional: Loading message or default content
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;
