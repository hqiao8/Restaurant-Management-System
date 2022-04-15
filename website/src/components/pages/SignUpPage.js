import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {
    return (
        <div className="login-page">
            <h2>Join us</h2>
            <form>
                <p>
                    <label>UserID</label><br/>
                    <input type="text" name="userid" required />
                </p>
                <p>
                    <label>First Name</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Last Name</label><br/>
                    <input type="text" name="last_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="signup_button" type="submit">Sign Up</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}