import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import Service from '../Home/Service/Service';
import Banner from '../Shared/Banner/Banner';

const AllServices = () => {
    const [services] = useServices();
    console.log(services)
    return (
        <div className="bg-dark py-5 ">
            <Banner><h1>Our Services</h1><p>Car Repair & Maintenance</p> </Banner>
            <Container fluid="md">
            <Row className="text-light py-3">
                <Col className="text-start" sm={12} md={6}>
                    <p>Repair and Maintenance</p>
                    <h1 >Our Services</h1>
                </Col>
                <Col sm={12} md={6}><p className="text-muted text-start">Our repair service keeps your vehicle moving. From minor repairs to major repairs of your vehicle. We offer a variety of services and you can count on us for all of your vehicle’s needs.</p></Col>
            </Row>
            <Row className="g-4 mx-auto"  sm={1} md={2} lg={4} >
            {
              services.map(service =>
                  <Col  key={service._id}>
                    <Service  service={service}></Service>
                     </Col>
              )
            }
            </Row>
            </Container>
        </div>
    );
};

export default AllServices;