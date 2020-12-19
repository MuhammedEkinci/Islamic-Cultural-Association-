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
                            <a className="nav-link " href="/home">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/location">LOCATION</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}