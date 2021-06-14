import React from 'react';

const ParentsDetails = ({say}) => {
    return (
        <div  className="col-md-4 w-75  col-sm-12">
            <div>
                <img src={say.photo} alt="pictures"/>
                <h5>{say.parents}</h5>
                <small>{say.date}</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dolorum assumenda cum libero quaerat debitis! Dolor blanditiis ab omnis veniam.</p>
            </div>
        </div>
    );
};

export default ParentsDetails;