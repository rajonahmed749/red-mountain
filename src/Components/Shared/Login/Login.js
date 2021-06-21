import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

const Login = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }



    const handleGoogle = () => {
        console.log("yess submitted");
    }

    return (
        <div>          
            <MenuBar/>            
            <div className="row  justify-content-center mt-5" >
                <div className="col-md-4">
                    <h4>This is for user content</h4>
                </div>
                <div className="col-md-4 text-center" >                    
                    <form>
                        <div className="mb-3">
                            <input type="email" className="form-control rounded-pill" id="exampleInputEmail1" placeholder="E-mail"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control rounded-pill" id="exampleInputPassword1" placeholder="Password"/>
                        </div>                        
                        <button type="button" onClick={handleGoogle} className="btn btn-primary rounded-pill ">Login with GOOGLE</button>
                    </form>
                </div>
            </div>           
        </div>
    );
};

export default Login;