import { Button } from '@material-ui/core';
import React from 'react'
import { auth, provider } from './firebase';
import './Login.css';

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).then(result =>
            console.log(result)).
            catch((error) => alert(error.message));

    };

    return (
        <div className="login" >
            <div className="login__container" >
                <img src="https://www.freepik.com/premium-vector/whatsapp-icon_799324.htm" alt=""/>
                <div className="login__text">
                    <h1>Sign In with WhatsApp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
