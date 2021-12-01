import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const UpdateService = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        
        console.log('service',service)

        axios.put(`http://localhost:5000/services/${serviceId}`, data)
            .then(res => {
            console.log(res.data)
        })
    }
    //get single user
   fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
    .then(data=>{
        setService(data)
        }) 
    
    return (
        <div className="my-5">
            <h1>Update {service?.title }</h1>
            <form className="d-flex flex-column w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      
         <input defaultValue={service?.title} className="p-2 rounded border-0 shadow my-3"  {...register("title", { required: true })} placeholder="product title" />
                
      {errors.title && <span>This field is required</span>}
      
     <input defaultValue={service?.price} type="number" className="p-2 rounded border-0 shadow my-3" {...register("price")} placeholder="product price" />
     
      
    <textarea defaultValue={service?.description} placeholder="product description" className="p-2 rounded border-0 shadow my-3" cols="30" rows="5" {...register("description", { required: true })}/>        
     {errors.description && <span>This field is required</span>}
     <input defaultValue={service?.img} className="p-2 rounded border-0 shadow my-3" {...register("img",{required: true})} placeholder="img-url" />
     {errors.img && <span>This field is required</span>}
                
      <input className="btn btn-warning" type="submit" />
    </form>
        </div>
    );
};

export default UpdateService;