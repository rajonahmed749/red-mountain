import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import MenuBar from '../../Shared/MenuBar/MenuBar';
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap';

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

    const { id } = useParams();

    fetch(`http://localhost:4000/service/${id}`)
        .then(res => res.json())
        .then(data => setService(data))

    const history = useHistory()
    service.user = loggedInUser.email;

    //order service
    const handleOrder = () => {
        fetch(`http://localhost:4000/addOrder`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addedService)
        })
            .then(res => res.json())
        history.push('/orders')
    }



    return (
        <div className="text-center">
            <MenuBar />
            <div className="mt-5 mb-3">
                <h2>Hello, {loggedInUser.name}!</h2>
                <h4> You have purchase this package.</h4>
            </div>
            <Card style={{ width: '18rem' }} className="mx-auto my-2 shadow rounded">
                <Card.Img className="IMG" variant="top" src={service.imageURL} />
                <Card.Body>                    
                    <Card.Text>{service.description}</Card.Text>
                    <Card.Title>Section: {service.service}</Card.Title>
                </Card.Body>

                <ListGroup className="list-group-flush">
                    <ListGroupItem> Package Cost: ${service.price}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button onClick={handleOrder} variant="warning"> <FontAwesomeIcon icon={faCheck} />Confirm Order</Button>
                </Card.Body>
                </Card>
        </div>
    );
};

export default Checkout;