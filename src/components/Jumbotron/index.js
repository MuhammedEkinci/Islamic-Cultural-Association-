import React from "react";
import "../../styles/Jumbotron.css";


export default function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid" id="hero-top">
                <h1 className="display-4">Elkton Maryland İslamic Cultural Center</h1>
                <p className="lead">
                    EMiCC is an İslamic Community Center That Serves The Elkton \ Delaware Community with religious services
                </p>
                <button className="btn btn-outline-dark btn-lg" href="#" role="button">Learn more</button>
        </div>
    );
}