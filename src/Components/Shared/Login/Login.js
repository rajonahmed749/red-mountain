import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
        // console.log(loggedInUser);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    const handleGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {                
                var credential = result.credential;
                var token = credential.accessToken;
                 const { displayName, email ,photoURL} = result.user;
                 const signedInUser = { name: displayName, email, img: photoURL }
                 setLoggedInUser(signedInUser)
                 history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });
    }

    return (
        <div>          
            <MenuBar/>            
            <div className="row  justify-content-center mt-5" >
                <div className="col-md-4 text-center ">
                    <img src={loggedInUser.img} alt="userPhoto" className="user-photo"/>
                    <h4>{loggedInUser.name}</h4>
               </div>
                <div className="col-md-4 text-center mt-3" >                    
                    <form>
                        <div className="mb-3">
                            <input type="email" className="form-control rounded-pill" id="exampleInputEmail1" placeholder="E-mail"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control rounded-pill" id="exampleInputPassword1" placeholder="Password"/>
                        </div>                        
                        <button type="button" onClick={handleGoogle} className="btn btn-info rounded-pill ">Login with GOOGLE</button>
                    </form>
                </div>
            </div>           
        </div>
    );
};

export default Login;