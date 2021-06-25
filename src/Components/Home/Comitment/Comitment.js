import React from 'react';
import picture1 from "../../../images/commitment.jpg"
import styles from "./Comitment.module.css"

const Comitment = () => {
    return (
        <div className="row  mt-5 justify-content-center">
            <div className="col-md-5 col-sm-12">
                <img className={`${styles.img} marginAuto`} src={picture1} alt="" />
            </div>
            <div className="col-md-6 col-sm-12">
                <div>
                    <h3 className="text-center mt-2"> <i>Fun and Learn</i></h3>
                    <h2>The Center for Early Childhood Education</h2>
                    <p>We provide an innovative, nurturing and stimulating environment where children develop independence, confidence and a positive sense of self and the world around them. Our curriculum is designed to involve children in experiences that enhance language, literacy, music, movement, art and socialization. Through play, all areas of development are fostered.</p>
                </div>
            </div>
        </div>
    );
};

export default Comitment;