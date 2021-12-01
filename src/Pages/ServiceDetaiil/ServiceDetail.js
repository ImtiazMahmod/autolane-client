import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
  
    // console.log('hey mr', serviceId)
    const [service,setService] = useState({});
    //get single user
    axios.get(`http://localhost:5000/services/${serviceId}`)
        .then(res => {
        setService(res.data)
        })
    
   
    return (
        <div>
          
            <h2>this display service of id {serviceId}</h2>
            <Card className="text-start mx-auto" style={{ width: '15rem', height: '28rem'}}>
                <Card.Img  variant="top" src={service?.img} />
                {service?.price && <p className="priceInfo">from $ {service?.price}   </p>}
  <Card.Body >
    <Card.Title>{service?.title}</Card.Title>
    <Card.Text className="text-secondary">
      {service?.description?.slice(0,100)}...
            </Card.Text>
            
          </Card.Body>
          
</Card>
        </div>
    );
};

export default Booking;