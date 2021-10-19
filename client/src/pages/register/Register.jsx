import React from 'react'
import logo from '../../assets/tmovie.png'
import Button from '../../components/button/Button'
import './register.scss'

const Register = (props) => {
    return (
        <div className="register">
            <div className="container">
                <div className="logo-container">
                    <div className="logo">
                        <img src={logo} alt="Login" /> Gultra
                    </div>
                    <Button onClick={() => props.history.push('/login')}>Sign In</Button>
                </div>
                <div className="content">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere, Cancle anytime.</h2>
                    <p>Ready to watch? Enter your email to create or restart your membership</p>
                    <div className="input">
                        <input type="text" placeholder="Email address" />
                        <button className="registerButton">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
