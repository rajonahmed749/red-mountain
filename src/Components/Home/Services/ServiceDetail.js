import React from 'react';
import { useHistory} from 'react-router-dom';
import './Services.css'

const Books = ({service}) => {
    

    const history = useHistory()
    const handleOrder = (id) =>{
          history.push(`/checkout/${id}`);
    }
    return (
        <div className="col-md-3">
            <div className="service shadow">
                <img className="IMG" style={{height: '300px', width:"300px"}} src={service.imageURL} alt="books"/>
                {/* <h4>Author: {book.authorName}</h4>  */}
                <h5>Price: ${service.price}</h5> 
                <button className="btn btn-success" onClick={()=>handleOrder(service._id)}>Buy Now</button>  
            </div>
        </div>
    );
};

export default Books;