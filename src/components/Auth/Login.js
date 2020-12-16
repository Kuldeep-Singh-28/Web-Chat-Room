import React from 'react';
import "./Login.css";

function Login() {
    const signIn = (e) =>{
        
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="" alt="" />
                <div className="login__text">
                    <h1>Sign in to WhatsApp Web</h1>
                    <button type="submit" onClick={signIn}></button>
                </div>
            </div>
        </div>
    )
}

export default Login
