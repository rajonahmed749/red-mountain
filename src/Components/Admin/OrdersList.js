import React, { useState } from 'react';

const OrdersList = () => {

    const [allService, setAllService] = useState([])

    fetch('http://localhost:4000/allServices')
    .then(res => res.json())
    .then(data => setAllService("all services",data))

    console.log(allService)

    return (
        <div>
            <h4>This is order list of {allService.length}</h4>
        </div>
    );
};

export default OrdersList;