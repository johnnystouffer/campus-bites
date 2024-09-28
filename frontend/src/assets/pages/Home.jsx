import react from "react";
import './Home.css'
import Login from "./Login"
import Register from "./Register" 
import { Route, Routes } from 'react-router-dom'


function Home() {
    return <>
        <div className="top-bar">
            <a href="/login" className="elem"> Login   </a>
            <br />
            <a href="/register" className="elem"> Register </a>
        </div>
        <div className="logo">
            <h1> Campus Bites </h1>
        </div>
        <div className="list-container">
        <div className="items-list">
            <ul>
                <li> Fe </li>
                <li> Fi </li>
                <li> Fo </li>
                <li> Fum </li>
                <li> Fe </li>
                <li> Fi </li>
                <li> Fo </li>
                <li> Fum </li>
                <li> Fe </li>
                <li> Fi </li>
                <li> Fo </li>
                <li> Fum </li>
                <li> Fe </li>
                <li> Fi </li>
                <li> Fo </li>
                <li> Fum </li>
                <li> Fe </li>
                <li> Fi </li>
                <li> Fo </li>
                <li> Fum </li>
            </ul>
        </div>
        </div>
    </>
}

export default Home