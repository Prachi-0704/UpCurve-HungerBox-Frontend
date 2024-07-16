import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false); // State to track success

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            employeeId: userId,
            employeeName: userName,
            emailId: email,
            password: password,
            role: type
        };

        console.log("Submitting user:", user); // Log the user object to see what is being sent

        try {
            const response = await fetch('http://localhost:8081/hungerBox/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            const data = await response.json();
            setMessage(data.message);

            if (data.status) {
                setIsSuccess(true);
                setTimeout(() => {
                    navigate('/login');
                }, 3000); // Redirect to login page after 3 seconds
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Registration failed');
            setIsSuccess(false);
        }
    };

    return (
        <div className="container">
            <div className="addUser">
                <h3>Register Here</h3>
                {message && (
                    <p style={{ color: isSuccess ? 'green' : 'red' }}>{message}</p>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="inputGroup">
                        <label htmlFor="userId">User ID</label>
                        <input
                            type="text"
                            placeholder="User ID"
                            id="userId"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            autoComplete='off'
                        />

                        <label htmlFor="userName">User Name</label>
                        <input
                            type="text"
                            placeholder="User Name"
                            id="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <label htmlFor="UserRole">User Role</label>
                        <select id="UserRole" value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="">Select Role</option>
                            {/* <option value="admin">Admin</option> */}
                            <option value="employee">Employee</option>
                            <option value="vendor">Vendor</option> {/* Ensure value matches backend expectations */}
                        </select>

                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
