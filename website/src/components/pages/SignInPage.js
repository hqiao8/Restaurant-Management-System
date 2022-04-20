import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import '../../App.css'

export default function SignInPage() {

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("C");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/user/login', 
            {
                name: fName + "." + lName,
                password: password,
                type: type
            }
        ).then(res => {
            if(res.status !== 400) {
                localStorage.setItem('token', res.data);
                switch(type) {
                    case "S": 
                        navigate('/recp');
                        break;
                    case "M": 
                        navigate('/mgr');
                        break;
                    default: 
                        navigate('/cust');
                        break;
                }
            }
        }).catch(err => {});
    };

    const handleFName = (e) => {
        setFName(e.target.value);
    };

    const handleLName = (e) => {
        setLName(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleType = (e) => {
        setType(e.target.value);
    };

    return (
        <div className="login-page">
            <h2>Sign in</h2>
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
                    <label>Password</label><br/>
                    <input type="password" name="password" value={password} onChange={handlePassword} required />
                </p>
                <p>
                    <select name="user_type" value={type} onChange={handleType} required>
                        <option value="C" selected="selected">
                            Customer
                        </option>
                        <option value="S">
                            Receptionist
                        </option>
                        <option value="M">
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