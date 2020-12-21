import React from "react";
import WeeklyMeeting from "../components/WeeklyMeeting";
import Jumbotron from "../components/Jumbotron";
import OurMission from "../components/OurMission";
import QuranDerse from "../components/QuranDerse";
import Contact from "../components/Contact";

export default function HomePage() {
    return (
        <div>
            <Jumbotron />
            <OurMission />
            <WeeklyMeeting />
            <QuranDerse />
            <Contact />
        </div>
    );
}