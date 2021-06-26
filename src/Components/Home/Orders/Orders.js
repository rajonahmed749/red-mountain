import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../../App';
import MenuBar from '../../Shared/MenuBar/MenuBar';
import { Table} from 'react-bootstrap';


const Orders = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [orders, setOrders] = useState([])
    const id = loggedInUser.email;
    useEffect(() => {
        fetch(`https://evening-ravine-30045.herokuapp.com/getOrders/${id}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const handleDelete = ( id) => {
        fetch(`https://evening-ravine-30045.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            alert("Requested Package deleted")
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="text-center mt-4">
            <MenuBar />
            <div className="text-center mt-4">
                <h3>Your current Order : {orders.length}</h3>
            </div>
            <div className=" mt-4">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Service Name</th>
                            <th>Package Charge</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(info => {
                                return (
                                    <tr key={info._id}>
                                        <td> <img src={info.imageURL} alt="books" style={{ width: "45px", height: "45px" ,borderRadius:"50%"}} /> </td>
                                        <td>{info.service}</td>
                                        <td>${info.price}</td>
                                        <td><button onClick={()=>handleDelete(`${info._id}`)} className="btn btn-danger">Delete</button> </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Orders;