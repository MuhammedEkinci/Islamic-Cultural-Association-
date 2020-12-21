import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import "../../styles/QuranDerse.css";


export default function OurMission() {
    return (
        <section className="activities" id="our-mission">
            <Container className>
                <Row className="justify-content-center">
                        <h3 className="section-header">Our Mission</h3>
                </Row>
                <Row className="justify-content-center">
                    <Col md={12} lg={4}>
                        <div className="content align-left">
                            <p className="text pb-3 mbr-black mbr-fonts-style display-7">
                                Elkton Maryland Culture is organized exclusively for charitable, religious, and educational, 
                                and purposes, including, for such purposes, the making of distributions to organizations that qualify 
                                as exempt organizations under section 501(c) (3) of the Internal Revenue Code, or corresponding section 
                                of any future federal tax code.
                            </p>
                            <br></br>
                        </div>
                    </Col>
                    <Col md={12} lg={4}>
                        <div className="content align-left">
                            <p className="text pb-3 mbr-black mbr-fonts-style display-7">
                                The Elkton Maryland Islamic Cultural Center shall serve the spiritual, 
                                religious and communal needs of the Muslims living in the area by means 
                                of nurturing their faith and upholding their values. 
                                It shall foster the well-being of the surrounding community through 
                                worship, charity, education, outreach and civic engagement.
                            </p>
                            <br></br>
                        </div>
                    </Col>
                    <Col md={12} lg={4}>
                        <div className="content align-left">
                            <p className="text pb-3 mbr-black mbr-fonts-style display-7">
                                The Elkton Maryland Islamic Cultural Center shall aim to be the focal point 
                                for the surrounding Muslim Community to enhance understanding and dispel many misconceptions about Islam. 
                                The Elkton Maryland Islamic Cultural Center shall work to enhance and improve the respect and cultivate 
                                the Muslim identity in the community with special consideration for the cultural
                                diversity in the city of Elkton and nearby areas.
                            </p>
                            <br></br>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}