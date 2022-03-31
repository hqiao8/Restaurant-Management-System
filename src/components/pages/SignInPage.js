import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in</h2>
            <form action="/home">
                <p>
                    <label>UserID</label><br/>
                    <input type="text" name="userid" required />
                </p>
                <p>
                    <label>Password</label>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Sign In</button>
                </p>
            </form>
            <footer>
                <p>New User? <Link to="/signin">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}