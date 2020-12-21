import React from "react";
import {Container, Row, Col, Alert} from "react-bootstrap";
import ActivityPic from "../../images/activity.png";
import "../../styles/QuranDerse.css";

export default function WeeklyMeeting() {


    return (
        <section className="activities section-class" id="weekly-meeting-area">
            <Container fluid>
                <Row>
                    <Col size={12} md={12} lg={6} className="img-col">
                        <img 
                            className="d-block w-100"
                            src={ActivityPic}
                            alt="Fun Game"
                        />
                    </Col>
                    <Col size={12} md={12} lg={6}>
                        <div className="wrapper">
                            <h3 className="mbr-section-subtitle align-left mbr-regular mbr-fonts-style section-title">
                                Meetings
                            </h3>
                            <h4 className="card-title mbr-bold pb-3 align-left mbr-white mbr-fonts-style display-2">
                                Weekly Meetings
                            </h4>
                            <Alert variant="danger">All our gatherings has been suspended until further notice due to the current pandemic restrictions issued by MD state !</Alert>
                            <div className="text-wrap">
                            <h4 className="link display-5">
                                    Monday: 
                                    <h5 className="text mbr-black mbr-fonts-style display-7">
                                        Closed
                                    </h5>
                                </h4>
                                <h4 className="link display-5">
                                    Tuesday: 
                                    <h5 className="text mbr-black mbr-fonts-style display-7">
                                        Closed
                                    </h5>
                                </h4>
                                <h4 className="link display-5">
                                    Wednesday: 
                                    <h5 className="text mbr-black mbr-fonts-style display-7">
                                        Closed
                                    </h5>
                                </h4>
                                <h4 className="link display-5">
                                    Thursday: 
                                    <h5 className="text mbr-black mbr-fonts-style display-7">
                                        Closed
                                    </h5>
                                </h4>
                                <h4 className="link display-5">
                                    Friday: 
                                    <h5 className="text mbr-black mbr-fonts-style display-7">
                                        Closed
                                    </h5>
                                </h4>
                                <h4 className="link display-5">
                                    Saturday: 
                                    <h5 className="text mbr-black mbr-fonts-style display-7">
                                        12:00pm - 5:00pm
                                    </h5>
                                </h4>
                                <h4 className="link display-5">
                                    Sunday: 
                                    <h5 className="text mbr-black mbr-fonts-style display-7">
                                        3:30pm - 10:00pm
                                    </h5>
                                </h4>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}