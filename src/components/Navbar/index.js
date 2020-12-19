import React from "react";
import {NavLink} from "react-router-dom";
import "../../styles/WebNavbar.css";

export default function WebNavbar() {
    return (
        <div className="row">
            <div className="col-lg-12">
                <nav className="navbar navbar-light bg-light justify-content-center web-nav">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">HOME</NavLink>                        
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/location">LOCATION</NavLink>                       
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}