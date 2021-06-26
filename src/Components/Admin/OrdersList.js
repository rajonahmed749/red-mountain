import React, { useState } from 'react';

const OrdersList = () => {

    const [allOrder, setAllOrder] = useState([])

    // fetch('https://evening-ravine-30045.herokuapp.com/allOrders')
    // .then(res => res.json())
    // .then(data => setAllOrder("all services",data))

    // console.log(allOrder)

    return (
        <div>
            <h4>This is order list of {allOrder.length}</h4>
        </div>
    );
};

export default OrdersList;