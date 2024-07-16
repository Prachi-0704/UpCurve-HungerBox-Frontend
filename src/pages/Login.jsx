import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate for navigation

const Login = () => {
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = {
            emailId: emailId,
            password: password
        };

        try {
            const response = await fetch('http://localhost:8081/hungerBox/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            const data = await response.json();
            setMessage(data.message);

            if (data.status) {
                navigate('/home'); // Redirect to the home page on successful login
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Login failed');
        }
    };

    return (
        <>
            <div className="login_page">
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>

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

                        <button type="submit">Login</button>

                        {message && <p>{message}</p>}

                        <div className="register">
                            <p>
                                Don't have an account? <Link to="/register">Register</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
