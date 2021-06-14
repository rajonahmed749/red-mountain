import React, { useState } from 'react';
import slidePic_1 from "../../../images/slider 1.jpg";
import slidePic_2 from "../../../images/slider 2.jpg";
import {Carousel} from "react-bootstrap";
import "./HeaderMain.css"

const HeaderMain = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item interval={1000}>
                    <img className="d-block w-100 slidePicture" src={slidePic_1} alt="First slide"/>
                    <Carousel.Caption>
                        <h3>The greatest self is a peaceful smile</h3>
                        <p>“Smiling is definitely one of the best beauty remedies. If you have a good sense of humor and a good approach to life, that’s beautiful”</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 slidePicture" src={slidePic_2} alt="Second slide"/>
                    <Carousel.Caption>
                        <h3>Education is the most powerful weapon </h3>
                        <p> “If You are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people”</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HeaderMain;