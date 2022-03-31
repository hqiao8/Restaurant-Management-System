import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/Logo.jpg'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">SignIn / SignUp page</h1>
            <div className="buttons text-center">
                <Link to="/signin">
                    <button className="primary-button">Sign In</button>
                </Link>
                <Link to="/signup">
                    <button className="primary-button" id="reg_btn"><span>Sign Up</span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}