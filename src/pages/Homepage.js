import React from "react";
import WeeklyMeeting from "../components/WeeklyMeeting";
import Jumbotron from "../components/Jumbotron";
import OurMission from "../components/OurMission";
import QuranDerse from "../components/QuranDerse";

export default function HomePage() {
    return (
        <div>
            <Jumbotron />
            <OurMission />
            <QuranDerse />
            <WeeklyMeeting />
        </div>
    );
}