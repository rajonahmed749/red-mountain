import React from 'react';
import picture_1 from "../../../images/parents-1.svg"
import picture_2 from "../../../images/parents-2.svg"
import picture_3 from "../../../images/parents-3.svg"
import ParentsDetails from './ParentsDetails';

const WhatParentsSay = () => {

    const saidData = [
        {
            parents: "Ms Puspo Akther",
            date: "12 April, 2020",
            photo: picture_1
        },
        {
            parents: "Mr. Rabinson Forth",
            date: "4 April, 2021",
            photo: picture_2
        },
        {
            parents: "Ms Fatema begum",
            date: "15 June, 2021",
            photo: picture_3
        }
    ];

    return (
        <div>
            <div className="mt-5 text-center ">
                <h2>What Parents Say !</h2>
            </div>
            <div className="row mt-5 text-center justify-content-center">
                {
                    saidData.map(say => <ParentsDetails say={say}></ParentsDetails>)
                }
            </div>
        </div>
    );
};

export default WhatParentsSay;