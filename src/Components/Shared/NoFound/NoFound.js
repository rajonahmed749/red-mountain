import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import { useHistory } from "react-router-dom";

const NoFound = () => {
    let history = useHistory();
    const handleBack = () => {
        history.push('/')
    }
    return (
        <div>
            <div>
                <MenuBar></MenuBar>
            </div>
            <div className="mt-5">
                <div  className="mt-5 text-center">
                    <h4> 404! Page not Found</h4>
                    <p>Please try to search relevant topic</p>
                    <button className=" btn btn-primary" onClick={handleBack}>Back Home</button>
                </div>
            </div>
            
        </div>
    );
};

export default NoFound;