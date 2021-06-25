import React, { useEffect, useState, useContext} from 'react';
import { UserContext } from '../../../App';



const Orders = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/getOrders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email})
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

   console.log("this is all order ", orders)


    return (
        <div className="text-center mt-4">
            <div className="text-center mt-4">
                <h3 className="textColor">Dear {loggedInUser.name}</h3>
                <h3>You've purchased {orders.length} packages</h3>
            </div>
            <div className=" mt-4">
                <table class="table table-hover">    
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col">Package Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        </tr>
                    </thead>                
                    <tbody>
                    {
                         orders.map(info => {
                        return (
                        <tr key={info._id}>
                            <td> <img src={info.imageURL} alt="books" style={{ width: "50px", height: "70px" }} /> </td>
                            <td>{info.bookName}</td>
                            <td>{info.authorName}</td>
                            <td>${info.price}</td>
                        </tr>
                        )
                        })
                    }
                    </tbody>
                </table>
            </div>           
        </div>
    );
};

export default Orders;