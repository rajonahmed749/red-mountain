import React from 'react';
import styles from "./WhyChoose.module.css"

const WhyChoose = () => {
    return (
        <div className={styles.chooseCard}>
            <div className="text-center mt-5 p-2">
                <h5><i>Read on to understand our difference</i></h5>
                <h2>Why Choose Red Mountain Kindergarden</h2>
            </div>
            <div className="row text-center mt-5">
                <div className="col-md-4">
                    <h5>Home-like Environment</h5>
                    <small>Children are comfortable and confident in their home, <br/> feeling safe and secure to explore and learn.</small>
                </div>
                <div className="col-md-4 p-2">
                    <h5>30 Day Moneyback Guarantee</h5>
                    <small>90% success rate of children reading before <br/> they go to school for children attending more than 12 months.</small>
                </div>
                <div className="col-md-4 p-2">
                    <h5>Culture of Honour</h5>
                    <small>We aim to help all people that come into contact with  <br/>
                    Red Mountain to feel Significant, Appreciated and Understood.</small>
                </div>
                <div className="col-md-4 p-2">
                    <h5>Orientation Process</h5>
                    <small>Makes the process of you and your child settling into care <br/> with Red Mountain that much smoother.</small>
                </div>
                <div className="col-md-4 p-2">
                    <h5>Home-like Environment</h5>
                    <small>Children are comfortable and confident in their home,<br/> feeling safe and secure to explore and learn.</small>
                </div>
                <div className="col-md-4 p-2">
                    <h5>Quality Educators</h5>
                    <small> Trusted, highly trained and hand-picked Educators. <br/> We believe that educators play a huge role in quality child care.</small>
                </div>
            </div>
            
        </div>
    );
};

export default WhyChoose;