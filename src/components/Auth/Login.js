import { Button } from '@material-ui/core';
import React from 'react';
import { actionTypes } from '../../DataLayer/reducer';
import { useStateValue } from '../../DataLayer/StateProvider';
import { auth, provider } from '../../firebase';
import "./Login.css";

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () =>{
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
            
    };
    
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/225px-WhatsApp.svg.png" alt="" />
                <div className="login__text">
                    <h1>Sign in to whatsapp-web</h1>
                    <p>chat-room</p>
                </div>
                    <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
