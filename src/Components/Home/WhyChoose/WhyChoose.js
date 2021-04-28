import React from 'react';
import WhyChooseDetails from '../WhyCooseDetails/WhyChooseDetails';
import styles from "./WhyChoose.module.css"

const WhyChoose = () => {
    const reasons = [
        {
            title: "Home-like Environment",
            details: "Children are comfortable and confident in their home, <br/> feeling safe and secure to explore and learn."
        },
        {
            title: "30 Day Moneyback Guarantee",
            details: "Children are comfortable and confident in their home, <br/> feeling safe and secure to explore and learn."
        },
        {
            title: "Culture of Honour",
            details: "Children are comfortable and confident in their home, <br/> feeling safe and secure to explore and learn."
        },
        {
            title: "Orientation Process",
            details: "Children are comfortable and confident in their home, <br/> feeling safe and secure to explore and learn."
        },
        {
            title: "Home-like Environment",
            details: "Children are comfortable and confident in their home, <br/> feeling safe and secure to explore and learn."
        },
        {
            title: "Home-like Environment",
            details: "Children are comfortable and confident in their home, <br/> feeling safe and secure to explore and learn."
        }
    ]
    return (
        <div className={styles.chooseCard}>
            <div className="text-center mt-5 p-2">
                <h5><i>Read on to understand our difference</i></h5>
                <h2>Why Choose Red Mountain Kindergarden</h2>
            </div>
            <div className="row mt-5 text-center justify-content-evenly">
               {
                   reasons.map(reason=><WhyChooseDetails reason={reason}></WhyChooseDetails> )
               }
            </div>
            
        </div>
    );
};

export default WhyChoose;