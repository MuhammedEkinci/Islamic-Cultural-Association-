import React from "react";
import {NavLink} from "react-router-dom";
import "../../styles/Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top web-nav container-fluid">
            <NavLink className="navbar-brand " to="/">Islamic Cultural Association</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/location">Where Are We</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}