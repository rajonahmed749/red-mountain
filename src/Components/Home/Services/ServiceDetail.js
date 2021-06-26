import React from 'react';
import { useHistory} from 'react-router-dom';
import './Services.css'

const Books = ({service}) => {
    

    const history = useHistory()
    const handleOrder = (id) =>{
          history.push(`/checkout/${id}`);
    }

    const text = service.description;
    let count = 60;
    let result = text.slice(0, count) + (text.length > count ? "..." : "");

    return (
        <div className="col-md-3">
            <div className="service shadow">
                <img className="IMG mb-2"  src={service.imageURL} alt="books"/>
                <h5 className="fst-italic">Section: {service.service}</h5> 
                <p>{result}</p> 
                <h6>Package cost: ${service.price}</h6> 
                <button className="btn btn-success mt-1" onClick={()=>handleOrder(service._id)}>Buy Now</button>  
            </div>
        </div>
    );
};

export default Books;