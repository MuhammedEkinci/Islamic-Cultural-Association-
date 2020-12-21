import React from "react";
import FunActivities from "../components/FunActivities";
import Jumbotron from "../components/Jumbotron";
import OurMission from "../components/OurMission";
import QuranDerse from "../components/QuranDerse";

export default function HomePage() {
    return (
        <div>
            <Jumbotron />
            <OurMission />
            <QuranDerse />
            <FunActivities />
        </div>
    );
}