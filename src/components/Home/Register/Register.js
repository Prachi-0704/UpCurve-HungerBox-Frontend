
// - - - - - - - - - - - - - - - -    W O R K I N G   R E G I S T E R   W I T H   C O N D I T I O N A L   R E N D E R I N G   B A S E D   O N   R O L E    - - - - - - - 



// components/Register.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(0);
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add('blur-background');
        return () => {
            document.body.classList.remove('blur-background');
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            fullName: fullName,
            emailId: emailId,
            password: password,
            role: role
        };

        try {
            const response = await fetch('http://localhost:8081/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            const data = await response.json();
            setMessage(data.message);

            if (response.status === 201) {
                setIsSuccess(true);
                setTimeout(() => {
                    setIsSuccess(false);
                    navigate('/login');
                }, 1200); // Adjusted to show popup for 2 seconds
            } else {
                setIsSuccess(false);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Registration failed');
            setIsSuccess(false);
        }
    };

    return (
        <div className="register_page">
            <div className="form-container">
                <h3>Register Here</h3>
                {message && (
                    <p className="message" style={{ color: isSuccess ? 'green' : 'red' }}>{message}</p>
                )}
                {isSuccess && (
                    <div className="success-popup">
                        <p>Registration successful!</p>
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="inputGroup">
                        <label htmlFor="fullName"></label>
                        <input
                            type="text"
                            placeholder="User Name"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <label htmlFor="emailId"></label>
                        <input
                            type="email"
                            placeholder="Email"
                            id="emailId"
                            value={emailId}
                            onChange={(e) => setEmailId(e.target.value)}
                        />
                        <label htmlFor="password"></label>
                        <input
                            type="password"
                            placeholder="Password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="role"></label>
                        <select id="role" value={role} onChange={(e) => setRole(parseInt(e.target.value))}>
                            <option value="">Select Role</option>
                            <option value={0}>Customer</option>
                            <option value={1}>Vendor</option>
                        </select>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
