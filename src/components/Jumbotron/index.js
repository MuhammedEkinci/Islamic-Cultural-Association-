import React from "react";
import "../../styles/Jumbotron.css";


export default function Jumbotron() {
    return (
        <div className="junmbotron jumbotron-fluid">
            <h1 className="display-4">Islamic Cultural Association</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
                <a className="btn btn-outline-dark btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
    );
}