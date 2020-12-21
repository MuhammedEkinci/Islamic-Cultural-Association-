import React from "react";
import {Container, Row, Col, Carousel} from "react-bootstrap";
import QuranDersePic from "../../images/quran-derse.png";
import ActivityPic from "../../images/activity.png";
import ActivityPic2 from "../../images/pool.png";
import "../../styles/QuranDerse.css";

export default function QuranDerse() {


    return (
        <section className="activities section-class" id="quran-derse-area">
            <Container fluid>
                <Row>
                    <Col size={12} md={12} lg={6}>
                        <div className="wrapper">
                            <h3 className="mbr-section-subtitle align-left mbr-regular mbr-fonts-style section-title">
                                Classes
                            </h3>
                            <h4 className="card-title mbr-bold pb-3 align-left mbr-white mbr-fonts-style display-2">
                                Quran Class
                            </h4>
                            <div className="text-wrap">
                                <h5 className="text mbr-black mbr-fonts-style display-7">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </h5>
                            </div>
                        </div>
                    </Col>
                    <Col size={12} md={12} lg={6} className="img-col">
                        <Carousel>
                            <Carousel.Item interval={2000}>
                                <img 
                                    className="d-block w-100"
                                    src={QuranDersePic}
                                    alt="Quran Derse"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img 
                                    className="d-block w-100"
                                    src={ActivityPic}
                                    alt="Fun Game"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img 
                                    className="d-block w-100"
                                    src={ActivityPic2}
                                    alt="Pool"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}