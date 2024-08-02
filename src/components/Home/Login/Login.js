
// - - - - - - - - - - - - - - - -    W O R K I N G   L O G I N   W I T H   C O N D I T I O N A L   R E N D E R I N G   B A S E D   O N   R O L E    - - - - - - - 

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setLoggedInStatus }) => {
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = {
            emailId: emailId,
            password: password
        };

        try {
            const response = await fetch('http://localhost:8081/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            const data = await response.json();
            setMessage(data.message);
            setIsSuccess(response.status === 200);

            if (response.status === 200) {
                localStorage.setItem('token', data.jwt); // Store JWT token in localStorage
                setLoggedInStatus(true); // Set logged in status to true
                setTimeout(() => {
                    setIsSuccess(false); // Hide success message after 3 seconds
                    if (data.role === 1) {
                        navigate('/vendorPage');
                    }
                    else if (data.role === 0) {
                        navigate('/userPage');
                    }
                }, 1000);
            } else {
                setIsSuccess(false);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Login failed');
            setIsSuccess(false);
        }
    };

    return (
        <div className="login_page">
            <div className="form-container">
                <h1>Login</h1>
                {isSuccess && (
                    <div className="success-popup">
                        <p>Login successful!</p>
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="input_box">
                        <input
                            type="email"
                            placeholder="Email Id"
                            value={emailId}
                            onChange={(e) => setEmailId(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input_box">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="forgot_password">
                        <a href="#">Forgot password?</a>
                    </div>
                    <div className='button'>
                        <button type="submit">Login</button>
                    </div>
                    {message && <p className="message" style={{ color: isSuccess ? 'green' : 'red' }}>{message}</p>}
                    <div className="register">
                        <p>
                            Don't have an account? <Link to="/register">Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
