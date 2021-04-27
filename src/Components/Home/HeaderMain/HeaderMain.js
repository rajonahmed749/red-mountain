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
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 slidePicture" src={slidePic_2} alt="Second slide"/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HeaderMain;