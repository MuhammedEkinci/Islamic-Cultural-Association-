import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import "../../styles/QuranDerse.css";



export default function Contact() {
    return (
        <section className="activities section-class" id="contact">
            <Container>
                <Row className="justify-content-center">
                    <h3 className="section-header">Contact Us</h3>
                </Row>
                <Row>
                    <Col size={12} md={12} lg={6} className="p-3">
                        <div className="card-wrapper">
                            <div className="card-box align-left">
                                <h3 className="mbr-section-subtitle align-left mbr-regular mbr-fonts-style section-title">
                                    Contact
                                </h3>
                                <h4 className="link display-5 align-left">
                                    Address:
                                    <h5 className="text mbr-black mbr-fonts-style display-7">
                                        528 W Pulaski Hwy, Elkton, MD 21921
                                    </h5>
                                </h4>
                                <h4 className="link display-5 align-left">
                                    Phone:
                                    <h5 className="text mbr-black mbr-fonts-style display-7">
                                        1 302-740-8034
                                    </h5>
                                </h4>
                                <h4 className="link display-5 align-left">
                                    Email:
                                    <h5 className="text mbr-black mbr-fonts-style display-7">
                                        elktonmarylandislamiccenter@gmail.com                                    
                                    </h5>
                                </h4>
                            </div>
                        </div>
                    </Col>
                    <Col size={12} md={12} lg={6} className="p-3">
                        <div className="card-wrapper">
                            <div className="card-box align-left">
                                <h3 className="mbr-section-subtitle align-left mbr-regular mbr-fonts-style section-title">
                                    Contact Us
                                </h3>
                                <Container className="form">
                                    <form id="contact-form" method="POST" action="https://formspree.io/f/xrgoqaoq">
                                        <Row>
                                            <Col size="md-6">
                                                <div class="form-group">
                                                    {/* First Name */}
                                                    <label for="form_name" className="display-5">First Name *</label>
                                                    <input id="form_name" type="text" name="name" className="form-control" placeholder="First Name" required="required" data-error="Firstname is required." />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </Col>
                                            <Col size="md-6">
                                                <div className="form-group">
                                                    {/* Last Name */}
                                                    <label for="form_lastname" className="display-5">Last Name *</label>
                                                    <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Last Name" required="required" data-error="Lastname is required." />
                                                    <div class="help-block with-errors"></div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size="md-6">
                                                <div className="form-group">
                                                    {/* Email */}
                                                    <label for="form_email" className="display-5">E-mail *</label>
                                                    <input id="form_email" type="email" name="email" className="form-control" placeholder="example@email.com" required="required" data-error="Valid email is required." />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </Col>
                                            <Col size="md-6">
                                                <div className="form-group">
                                                    {/*  Phone */}
                                                    <label for="form_phone" className="display-5">Phone</label>
                                                    <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="111-222-3333" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size="md-12">
                                                <div className="form-group">
                                                    {/*  Message  */}
                                                    <label for="form_message" className="display-5">Message *</label>
                                                    <textarea id="form_message" name="message" className="form-control" placeholder="Message for us" rows="6" required="required" data-error="Please include a message."></textarea>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Col size="md-12">
                                            {/* Submit Button */}
                                            <input type="submit" className="btn btn-outline-primary btn-send " value="Send message" />
                                        </Col>
                                    </form>
                                </Container>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}