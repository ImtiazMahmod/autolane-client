import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
    const { register, handleSubmit,reset,  formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    setShow(true);
                    reset();
               }
        })
    }

    return (
        <div className="my-5">
            {
                show && <Modal className="d-flex align-items-center" show={show} onHide={handleClose}>
                
                <Modal.Body>Woohoo, you're added a Service!</Modal.Body>
                <Modal.Footer>
                  <Button variant="warning" onClick={handleClose}>
                    Ok
                  </Button>
                </Modal.Footer>
              </Modal>
            }
            <h1>Add a service</h1>
            <form className="d-flex flex-column w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      
      <input className="p-2 rounded border-0 shadow my-3"  {...register("title",{required: true})} placeholder="product title"/>
      {errors.title && <span>This field is required</span>}
      
     <input type="number" className="p-2 rounded border-0 shadow my-3" {...register("price")} placeholder="product price" />
     
      
    <textarea placeholder="product description" className="p-2 rounded border-0 shadow my-3" cols="30" rows="5" {...register("description", { required: true })}/>        
     {errors.description && <span>This field is required</span>}
     <input className="p-2 rounded border-0 shadow my-3" {...register("img")} placeholder="img-url" />
                
      <input className="btn btn-warning" type="submit" />
    </form>
        </div>
    );
};

export default AddService;