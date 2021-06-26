import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import "./Admin.css";
const axios = require('axios');


const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();    

    const [imageURL, setImgURL] = useState({});

    // const [books, setBooks] = useContext(UserContext);
    const [services, setServices] = useState({})

    const onSubmit = data =>{
        console.log("first data", data)
        console.log(services)
        const serviceData = {
            service : data.service,
            price : data.price,
            description : data.description,
            imageURL : imageURL
        }
        setServices(serviceData)
        // const { bookName, authorName, price } = data;
        const url = `https://evening-ravine-30045.herokuapp.com/addService`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(serviceData),
            })            
            .then(res => {
                alert("this service addedd correctly");
            })
            .catch((error) => {
            console.error('Error:', error);
            });
        };

    const handleImage = e => {
        console.log(e.target.files)
        const imageData = new FormData();
        imageData.set("key", "c3d923525ccf4403d53c88c8a104059e")
        imageData.append("image", e.target.files[0]);
        axios.post("https://api.imgbb.com/1/upload", imageData)
        .then(function (response) {
            setImgURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });    
    }
    return (
        <div className=" row justify-content-center">
           <div className="col-md-5">
           <form onSubmit={handleSubmit(onSubmit)} className="form-card">    
                 <input type="text" name="service" placeholder="Service title" {...register("service", { required: true })} />                
                <input type="number"  name="price" placeholder="Service Cost" {...register("price", { required: true })} />
                <textarea rows="3" cols="43" name="description" form="usrform" placeholder=" Service Description" {...register("description", { required: true })} ></textarea>

                <input onChange={handleImage} type="file" />
              
                               
                <input type="submit" />
            </form>
           </div>
        </div>
    );
};

export default AddService;