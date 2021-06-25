import React from 'react';
import { Card } from "react-bootstrap"

const WhyChooseDetails = ({ reason }) => {

    return (
        <div className="col-md-4 mt-5 ">
            <Card style={{ width: '18rem' }} className="rounded marginAuto">
                <Card.Body>
                    <Card.Title>{reason.title}</Card.Title>
                    <Card.Text>
                        <p>{reason.details}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default WhyChooseDetails;