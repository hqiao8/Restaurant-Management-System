import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignInPage() {
    return (
        <div className="login-page">
            <h2>Sign in</h2>
            <form>
                <p>
                    <label>UserID</label><br/>
                    <input type="text" name="userid" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <select name="user_type" required>
                        <option disabled selected value>
                            Select the user type
                        </option>
                        <option>
                            Customer
                        </option>
                        <option>
                            Receptionist
                        </option>
                        <option>
                            Manager
                        </option>
                    </select>    
                </p>
                <p>
                    <button id="signin_button" type="submit">Sign In</button>
                </p>
            </form>
            <footer>
                <p>New User? <Link to="/signup">Join us</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}