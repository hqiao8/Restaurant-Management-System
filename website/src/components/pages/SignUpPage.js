import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import '../../App.css'

export default function SignUpPage() {

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/user/register', 
            {
                name: fName + "." + lName,
                fName: fName,
                lName: lName,
                email: email,
                password: password
            }
        ).then(res => {
            if(res.status != 400) {
                navigate('/signin');
            }
        })
        .catch(err => {});
    };

    const handleFName = (e) => {
        setFName(e.target.value);
    };

    const handleLName = (e) => {
        setLName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="login-page">
            <h2>Join us</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>First Name</label><br/>
                    <input type="text" name="first_name" value={fName} onChange={handleFName} required />
                </p>
                <p>
                    <label>Last Name</label><br/>
                    <input type="text" name="last_name" value={lName} onChange={handleLName} required />
                </p>
                <p>
                    <label>Email</label><br/>
                    <input type="email" name="email" value={email} onChange={handleEmail} required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" value={password} onChange={handlePassword} required />
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