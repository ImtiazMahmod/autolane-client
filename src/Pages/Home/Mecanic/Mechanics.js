import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useMechanic from '../../../Hooks/useMechanic';
import Mechanic from './Mechanic';

const Mechanics = () => {
    const [mechanics] = useMechanic();
    console.log(mechanics)
    return (
        <div className="py-5" id="experts">
            <Container >
                <div className="py-3">
                    
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

export default Mechanics;