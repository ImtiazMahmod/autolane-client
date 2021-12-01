import React from 'react';
import { Card } from 'react-bootstrap';

const Mechanic = ({ mechanic }) => {
    const { name,workArea, desc, img } = mechanic;
    return (
        <div>
            <Card className="text-center mx-auto" style={{ width: '15rem', height: '25rem'}}>
          
  <Card.Body >
    <Card.Title className="text-danger">{workArea}</Card.Title>
                    <Card.Title className="fw-bold">{name}</Card.Title>
                    <hr  className="m-5 my-4"/>
    <Card.Text className="text-secondary">
      {desc}
    </Card.Text>
    
          </Card.Body>
                <Card.Img  variant="top" src={img} />
          
</Card>
        </div>
    );
};


export default Mechanic;