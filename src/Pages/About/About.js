import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useMechanic from '../../Hooks/useMechanic';
import Mechanic from '../Home/Mecanic/Mechanic';
import Banner from '../Shared/Banner/Banner'

const About = () => {
    const [mechanics] = useMechanic();
    console.log(mechanics)
    return (
        <div className="py-5 bg-dark ">
            <Banner><h1>About Us</h1><p>Auto Repair Since 2000
</p> </Banner>
            <Container >
                <div className="py-3 text-light" >
                    
            <p>Skilled People</p>
                    <h1 >Our Mechanics</h1>
                </div>
            <Row className="g-4 mx-auto"  sm={1} md={2} lg={4} >
            {
              mechanics.slice(0, 4).map(mechanic =>
                  <Col  key={mechanic.id}>
                    <Mechanic  mechanic={mechanic}></Mechanic>
                     </Col>
              )
            }
            </Row>
            </Container>
            </div>
    );
};

export default About;