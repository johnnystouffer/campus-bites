import react from "react";
import './Home.css'
import Login from "./Login"
import PostForm from "./PostForm.jsx"
import Register from "./Register" 
import { Route, Routes } from 'react-router-dom'
import Card from "../components/card.jsx"
import HtmlDisplay from "/src/assets/components/HtmlDisplay.jsx";


function Home() {
    const description = `Create a simple React component that displays the text 'Hello, World!' on the screen. The component should include:
    A functional component structure.
    Basic styling to center the text on the page.
    An export statement for the component.
    Please provide the complete code for this component.`;
    
    return <>
        <div className="top-bar">
            <a href="/login" className="elem"> Login   </a>
            <br />
            <a href="/register" className="elem"> Register </a>
        </div>
        <div className="logo">
            <h1>~~ Campus Bites ~~</h1>
        </div>
        <div className="list-container">
            <div className="card-list" >
                <Card eventName="$7 burrito with drink" orgName="Qdoba" date={new Date("December 17, 2024 00:00:00")} />
                <Card eventName="Free pizza" orgName="Robotics Club" date={new Date("October 31, 2024 13:00:00")} />
            </div>
            <div className="dynamic-html">
                    <HtmlDisplay description={description} />
            </div>
        </div>
    </>
}

export default Home