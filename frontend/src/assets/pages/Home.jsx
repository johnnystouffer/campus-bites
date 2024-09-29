import React, { useState, useEffect } from 'react';
import './Home.css';
import Card from "../components/card.jsx";
import api from '../../api.js';
import HtmlDisplay from "/src/assets/components/HtmlDisplay.jsx";
import GptPrompt from './GptPrompt.jsx';


function Home() {
    const [data, updateData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    // Filter states
    const [priceFilter, setPriceFilter] = useState("");
    const [cuisineFilter, setCuisineFilter] = useState("");
    const [dateFilter, setDateFilter] = useState("");

    useEffect(() => {
        const getApiData = async () => {
            try {
                const response = await api.get('api/deals/');
                updateData(response.data);
                setFilteredData(response.data);  // Initially display all data
            } catch (error) {
                console.error(error);
            }
        };

        getApiData();
    }, []);

    // Function to handle filtering the data when the user triggers it
    const applyFilters = () => {
        let filtered = data;

        if (priceFilter) {
            filtered = filtered.filter(event => parseFloat(event.price) <= parseFloat(priceFilter));
        }

        if (cuisineFilter) {
            filtered = filtered.filter(event => event.cuisine?.toLowerCase().includes(cuisineFilter.toLowerCase()));
        }

        if (dateFilter) {
            filtered = filtered.filter(event => event.date_of_event === dateFilter);
        }

        setFilteredData(filtered);
    };

    // Reset filters and clear input fields
    const resetFilters = () => {
        setPriceFilter("");
        setCuisineFilter("");
        setDateFilter("");
        setFilteredData(data);  // Reset to the full dataset
    };

    return (
        <>
            <div className="top-bar">
            <a href="/gptdecider" className='elem'> I DON'T KNOW WHAT TO GET</a>
                <br />
                <a href="/postevent" className='elem'>POST</a>
                <br />
                <a href="/login" className="elem">LOGIN</a>
                <br />
                <a href="/register" className="elem">REGISTER</a>
                <br />
            </div>
            <div className="logo">
                <h1>~~ Campus Bites ~~</h1>
            </div>
            
            {/* Filters */}
            <div className="filters">
                <div className="filter">
                    <label>Max Price:</label>
                    <input 
                    id='thing'
                        type="number" 
                        value={priceFilter} 
                        onChange={(e) => setPriceFilter(e.target.value)} 
                        placeholder="Enter max price"
                    />
                </div>

                <div className="filter">
                    <label>Cuisine:</label>
                    <input 
                        id='thing'
                        type="text" 
                        value={cuisineFilter} 
                        onChange={(e) => setCuisineFilter(e.target.value)} 
                        placeholder="Enter cuisine type"
                    />
                </div>

                <div className="filter">
                    <label>By Date:</label>
                    <input 
                    id='thing'
                        type="date" 
                        value={dateFilter} 
                        onChange={(e) => setDateFilter(e.target.value)} 
                    />
                </div>

                <div className="filter">
                    <button id='submit-filters' type='button' onClick={applyFilters}>APPLY FILTERS</button>
                </div>

                <div className='filter'>
                    <button id='submit-filters' type='button' onClick={resetFilters}>RESET</button>
                </div>
            </div>
            
            {/* Card List */}
            <div className="list-container">
                <div className="card-list">
                    {filteredData.length > 0 ? (
                        filteredData.map((event, index) => (
                            <Card
                                key={index}  // Add a unique key for each card
                                price={event.price}
                                eventName={event.event_name}
                                caloriePerDollar={event.calorie_per_dollar}
                                description={event.description}
                                orgName={event.hosting_organization} // Assuming hosting_organization is not present, using description instead
                                date={event.date_of_event}
                                time={event.time_of_event}
                                address={event.address}
                                cuisine={event.cuisine}
                            />
                        ))
                    ) : (
                        <div className="no-events-container">
                            <p className='no-events'>No events match the filters...</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;
