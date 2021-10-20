import React from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

const Login = () => {
    return (
        <div className="login">
            <div className="container">
                <div className="login__container">
                    <h2>Sign In</h2>
                    <form>
                        <input type="email" placeholder="Email Address" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Sign In</button>
                    </form>

                    <h4>New to Gletra? <strong><Link to='/register'>Sign up New.</Link></strong></h4>
                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot, <strong>Learn more.</strong></p>
                </div>
            </div>
        </div>
    )
}

export default Login
