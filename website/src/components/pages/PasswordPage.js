import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import '../../App.css'

export default function PasswordPage() {

    const [psd, setPsd] = useState("");
    const [cfmPsd, setCfmPsd] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3000/api/user/changePassword', 
            {
                password: psd,
                confirm: cfmPsd
            },
            {headers: {'auth-token': localStorage.getItem('token')}}
        ).then(res => {
            if(res.status !== 400) {
                navigate(-1);
            }
        }).catch(err => {});
    };

    const handleCancel = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    const handlePsd = (e) => {
        setPsd(e.target.value);
    };

    const handleCfmPsd = (e) => {
        setCfmPsd(e.target.value);
    };

    return (
        <div className="login-page">
            <h2>Change Password</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" value={psd} onChange={handlePsd} required />
                </p>
                <p>
                    <label>Confirm Password</label><br/>
                    <input type="password" name="password" value={cfmPsd} onChange={handleCfmPsd} required />
                </p>
                <p>
                    <button id="signup_button" type="submit">Update</button>
                    <button id="signup_button" onClick={handleCancel}>Cancel</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}