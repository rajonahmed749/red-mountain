import React from 'react';
import { useForm } from 'react-hook-form';
import "./Admin.css"

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();    


    const onSubmit = data => {
        console.log(data)
    };

    const handleImage = e => {
        console.log(e.target.files)
    }
    return (
        <div className=" row justify-content-center">
           <div className="col-md-5">
           <form onSubmit={handleSubmit(onSubmit)} className="form-card">    
                 <input type="text" name="Service" placeholder="Service" {...register("Service", { required: true })} />
                
                <input type="text" rows="5"  name="Description" placeholder="Description" {...register("Description", { required: true })} />

              

                <input onChange={handleImage} type="file" />
              
                               
                <input type="submit" />
            </form>
           </div>
        </div>
    );
};

export default AddService;