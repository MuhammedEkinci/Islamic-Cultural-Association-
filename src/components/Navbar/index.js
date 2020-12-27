import React from "react";
import {NavLink} from "react-router-dom";
import "../../styles/Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top web-nav container-fluid">
            <a className="navbar-brand " href="#hero-top">Islamic Cultural Association</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#our-mission">Our Mission</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#weekly-meeting-area">Weekly Meetings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#quran-derse-area">Quran Class</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}