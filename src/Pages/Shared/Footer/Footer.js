import { faArrowRight, faEnvelope,  faGlobeAsia,  faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const arrow= <FontAwesomeIcon icon={faArrowRight }/>
    return (
        <div className="bg-dark text-light p-5 ">
            <Container>
                <Row >
                <Col sm={1} md={2} lg={12} className="text-start mt-5">
                    < h4 className="mb-5">About Autolane</ h4>
                        <p className="text-secondary">Autolane is built for Auto Repair and Car Maintenance shops but is suitable for all companies with related services. Novice or experienced in WordPress, this theme will fit your needs to build a website that will stand out.</p>
                    </Col>
                

                <Col className=" mt-5 text-start">
                    < h4>Services Menu</ h4>
                        <div className="d-flex flex-column text-start  text-decoration-none">
                            <NavLink className="main-route my-2 border-bottom border-secondary py-3" to="/">{arrow} All Services</NavLink>
                    <NavLink  className="main-route my-2 border-bottom border-secondary py-3" to="/">{arrow}  Brake Repair</NavLink>
                    <NavLink className="main-route my-2 border-bottom border-secondary py-3" to="/">{arrow} Engine Repair</NavLink>
                    <NavLink className="main-route my-2 border-bottom border-secondary py-3" to="/">{arrow} Oil Change</NavLink>
                    <NavLink className="main-route my-2 border-bottom border-secondary py-3" to="/">{arrow} Tire Change</NavLink>
                    <NavLink className="main-route my-2 border-bottom border-secondary py-3" to="/">{arrow} Performance</NavLink>
                    </div>
                </Col>
                <Col className="text-start  mt-5">
                    < h4>Contact Details</ h4>
                        <div><div className="d-flex align-items-center  border-bottom border-secondary my-4">
                            <FontAwesomeIcon className="fs-2 text-secondary" icon={faGlobeAsia}/>
                            <div className="ms-3 my-4 ">
                            <p className="fw-bold">36 lane</p>
                            <p className="text-secondary ">Dhaka,Bangladesh</p></div>
                        </div>
               
                    <div className="d-flex align-items-center  border-bottom border-secondary">
                        <FontAwesomeIcon className="fs-2 text-secondary" icon={faPhone}/>
                        <div className="ms-3 my-4 ">
                        <p className="fw-bold">+880 177 678 904</p>
                        <p className="text-secondary">Mon till Fri: 8:00 till 6:00</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center  border-bottom border-secondary">
                    <FontAwesomeIcon  className="fs-2 text-secondary"  icon={faEnvelope}/>
                        <div  className="ms-3 my-4 ">
                            <p  className="fw-bold">info@autolane.com</p>
                        <p  className="text-secondary">We reply within 1 day</p>
                    </div>
                    </div></div>
                </Col>
                <Col>
                    <div className="text-start  mt-5">
                        < h4>Opening Hours</ h4>
                    <div className="mt-5">
                        <div className="d-flex my-3 border-bottom border-secondary">
                            <p className="text-secondary">Saturday</p>
                            <p className="ms-auto fw-bold text-secondary">08:00 - 18:00</p>
                        </div>
                        <div  className="d-flex my-3 border-bottom border-secondary">
                            <p className="text-secondary">Sunday</p>
                            <p className="ms-auto fw-bold text-secondary">08:00 - 18:00</p>
                        </div>
                        <div className="d-flex my-3 border-bottom border-secondary">
                            <p className="text-secondary">Monday</p>
                            <p className="ms-auto fw-bold text-secondary">08:00 - 18:00</p>
                        </div>
                        <div className="d-flex my-3 border-bottom border-secondary">
                            <p className="text-secondary">Tuesday</p>
                            <p className="ms-auto fw-bold text-secondary">08:00 - 18:00</p>
                        </div>
                        <div className="d-flex my-3 border-bottom border-secondary">
                            <p className="text-secondary">Wednesday</p>
                            <p className="ms-auto fw-bold text-secondary">08:00 - 18:00</p>
                        </div>
                        <div className="d-flex my-3 border-bottom border-secondary">
                            <p className="text-secondary">Thursday</p>
                            <p className="ms-auto fw-bold text-secondary">08:00 - 18:00</p>
                        </div>
                        <div className="d-flex my-3 border-bottom border-secondary">
                            <p className="text-secondary">Friday</p>
                            <p  className="ms-auto fw-bold text-warning ">We're Closed</p>
                        </div>
                    </div>
                    </div>
                </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;