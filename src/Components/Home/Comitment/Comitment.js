import React from 'react';
import picture from "../../../images/comitment-picture.jpg";
import styles from "./Comitment.module.css"

const Comitment = () => {
    return (
        <div>
            <div className="row text-center mt-5">
                <div className="col-md-6 col-sm-12">
                    <img className={styles.img} src={picture} alt=""/>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div>
                        <h4> <i> Learn and Fun</i></h4>
                        <h2>The Center for Early Childhood Education</h2>
                        <p>We provide an innovative, nurturing and stimulating environment where children develop independence, confidence and a positive sense of self and the world around them. Our curriculum is designed to involve children in experiences that enhance language, literacy, music, movement, art and socialization. Through play, all areas of development are fostered.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Comitment;