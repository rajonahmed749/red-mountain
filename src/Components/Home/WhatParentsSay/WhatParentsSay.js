import React from 'react';
import picture_1 from "../../../images/parents-1.svg"
import picture_2 from "../../../images/parents-2.svg"
import picture_3 from "../../../images/parents-3.svg"

const WhatParentsSay = () => {
    return (
        <div>
            <div className="mt-5 text-center justify-content-center">
                <h2>What Parents Say !</h2>
            </div>
            <div className="row mt-5 text-center">
                <div className="col-md-4 w-75 col-sm-12">
                    <img src={picture_1} alt="pictures"/>
                    <h5>Mr. Rabinson</h5>
                    <small> 4 April, 2021</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dolorum assumenda cum libero quaerat debitis! Dolor blanditiis ab omnis veniam.</p>
                </div>
                <div className="col-md-4 w-75 col-sm-12">
                    <img src={picture_2} alt="pictures"/>
                    <h5>Ms Fatema begum</h5>
                    <small> 4 April, 2021</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dolorum assumenda cum libero quaerat debitis! Dolor blanditiis ab omnis veniam.</p>
                </div>
                <div className="col-md-4 w-75 col-sm-12">
                    <img src={picture_3} alt="pictures"/>
                    <h5>Ms Puspo Akther</h5>
                    <small> 4 April, 2021</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dolorum assumenda cum libero quaerat debitis! Dolor blanditiis ab omnis veniam.</p>
                </div>
            </div>
            
        </div>
    );
};

export default WhatParentsSay;