import axios from 'axios';
import React, { useState  } from 'react';
import {  Button, Card, Modal } from 'react-bootstrap';
import { NavLink,useHistory } from 'react-router-dom';

const Service = (props) => {
  const history = useHistory()
  const { _id,  title, price, description, img } = props?.service;
  // console.log(service)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

   ///update a service 
   const handleUpdate = () => {
     history.push(`/updateservice/${_id}`);
     
}
///delete service
const handleDelete = (id) => {
    console.log('delete')
    const proceed = window.confirm('Are you sure to delete?');
    if (proceed) {
        axios.delete(`http://localhost:5000/services/${id}`)
      .then(res => {
          if (res.data.deletedCount) {
              setShow(true);
            history.push('/home');
            

      }
    })
    }
  }
 
    return (
      <div>
          {
                show && <Modal className="d-flex align-items-center" show={show} onHide={handleClose}>
                
                <Modal.Body>Ops, you're deleted a Service!</Modal.Body>
                <Modal.Footer>
                  <Button variant="danger" onClick={handleClose}>
                    Ok
                  </Button>
                </Modal.Footer>
              </Modal>
            }
            <Card className="text-start mx-auto" style={{ width: '15rem', height: '28rem'}}>
                <Card.Img  variant="top" src={img} />
                {price && <p className="priceInfo">from $ {price}   </p>}
  <Card.Body >
    <Card.Title>{title}</Card.Title>
    <Card.Text className="text-secondary">
      {description.slice(0,100)}...
            </Card.Text>
            <NavLink className="text-decoration-none text-danger fw-bold" to={`/services/${_id}`}>View More</NavLink><br />
            <Button onClick={handleUpdate} variant="warning" className="m-2">Update</Button>
            <Button onClick={()=>handleDelete(_id)} variant="warning" className="m-2">Delete</Button>
           
          </Card.Body>
          
</Card>
        </div>
    );
};

export default Service;