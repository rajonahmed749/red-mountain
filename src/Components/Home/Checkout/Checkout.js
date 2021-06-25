import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [service, setService] = useState({});
    
    const addedService = {
        service: service.service,
        price: service.price,
        description: service.description,
        imageURL: service.imageURL,
        user: service.user 
    }

    console.log("this would be added", addedService)

    const {id} = useParams();

    fetch(`http://localhost:4000/service/${id}`)
    .then(res => res.json())
    .then(data => setService(data))
    
    const history = useHistory()
    service.user = loggedInUser.email;

    //order service
   const handleOrder = () => {
        fetch(`http://localhost:4000/addOrder`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(addedService)
            })
            .then(res => res.json())
            history.push('/orders')
   }



    return (
        <div className="text-center">
            <div className="mt-5">
                <h1>Checkout Your Book</h1>
                <h2>Hello, {loggedInUser.name}! Your Book Is Here.</h2>
            </div>
            <div className="table-div table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Buyer</th>
                            <th scope="col">Book Name</th>
                            <th scope="col">Author Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{loggedInUser.name}</td>
                            
                            <td>{service.service}</td>
                            <td>{service.description}</td>
                            <td>${service.price}</td>
                            <td className="btn btn-primary text-dark" onClick={handleOrder}><FontAwesomeIcon icon={faCheck} /> Confirm Order</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Checkout;