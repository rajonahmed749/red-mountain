import React from 'react';
import MenuBar from '../../Shared/MenuBar/MenuBar';
import { useHistory } from "react-router-dom";

const About = () => {
    let history = useHistory();
    return (
        <div>
            <MenuBar></MenuBar>
            <div className="mt-5 text-center">
                <h2>This page is comming soon</h2>
                <button className=" btn btn-primary mt-3" onClick={()=>history.push('/')}>Go Home</button>
            </div>
        </div>
    );
};

export default About;