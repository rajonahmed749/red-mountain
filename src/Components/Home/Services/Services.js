import React, { useEffect, useState } from 'react';
import ServiceDetail from "./ServiceDetail";

const Services = () => {

const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/allServices")
        .then(res => res.json())
        .then(data => {
            setServices(data)
            if(data){
                document.getElementById('spinner').style.display= 'none'
            }
        })
    }, [])
    return (
        <div className="mt-5">
           <div className="spinner-border text-info mt-4 marginAuto" id="spinner"></div>
           <h3 className="text-center mt-4">Our Programs</h3>
           <div className="row mt-3">
                {
                    services.map(service => <ServiceDetail key={service._id} service={service}></ServiceDetail> )
                }
            </div>
        </div>
    );
};

export default Services;