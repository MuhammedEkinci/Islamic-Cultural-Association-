import React from "react";
import {Container, Row, Col, Alert} from "react-bootstrap";
import "../../styles/QuranDerse.css";

export default function WeeklyMeeting() {


    return (
        <section className="activities section-class" id="weekly-meeting-area">
            <Container fluid>
                <Row>
                    <Col size={12} md={12} lg={6} className="img-col">
                        {/* used MDB to give image hover effect*/}
                        <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
                            <img className="d-block w-100" src="https://news-network.rice.edu/news/files/2020/07/98448681_l.jpg" alt="Fun Game" />
                            <a href="https://www.muslimpro.com/tr/find?country_code=US&country_name=United%20States&state=MD&city_name=Elkton&coordinates=39.60677889999999,-75.83327179999999" target="_blank">
                                <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.4)"}}>
                                    <div className="d-flex justify-content-center align-items-center h-100">
                                        <p className="text-white display-1">Prayer Times</p>
                                    </div>
                                </div>
                                <div className="hover-overlay">
                                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                                </div>
                            </a>
                        </div>
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