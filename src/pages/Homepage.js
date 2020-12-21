import React from "react";
import FunActivities from "../components/FunActivities";
import Jumbotron from "../components/Jumbotron";
import QuranDerse from "../components/QuranDerse";

export default function HomePage() {
    return (
        <div>
            <Jumbotron />
            <QuranDerse />
            <FunActivities />
        </div>
    );
}