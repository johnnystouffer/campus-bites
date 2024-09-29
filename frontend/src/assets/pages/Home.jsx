import react from "react";
import './Home.css'
import Login from "./Login"
import Register from "./Register" 
import { Route, Routes } from 'react-router-dom'
import Card from "../components/card.jsx"


function Home() {
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
        </div>
    </>
}

export default Home