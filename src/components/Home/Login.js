
// // - - - - - - - - - - - - - - - - working login- - - - - - - - -- - -  -- - -- - - -


// // components/Login.js
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//     const [emailId, setEmailId] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const [showSuccess, setShowSuccess] = useState(false);

//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const loginData = {
//             emailId: emailId,
//             password: password
//         };

//         try {
//             const response = await fetch('http://localhost:8081/auth/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(loginData)
//             });

//             const data = await response.json();
//             setMessage(data.message);

//             if (response.status === 200) {
//                 localStorage.setItem('token', data.jwt); // Store JWT token in localStorage
//                 setShowSuccess(true); // Show success message
//                 setTimeout(() => {
//                     setShowSuccess(false); // Hide success message after 3 seconds
//                     navigate('/userPage'); // Redirect to the home page on successful login
//                 }, 1000);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             setMessage('Login failed');
//         }
//     };

//     return (
//         <div className="login_page">
//             <div className="form form-container">
//                 <form onSubmit={handleSubmit}>
//                     <h1>Login</h1>
//                     <div className="input_box">
//                         <input
//                             type="email"
//                             placeholder="Email Id"
//                             value={emailId}
//                             onChange={(e) => setEmailId(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="input_box">
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="forgot_password">
//                         <a href="#">Forgot password?</a>
//                     </div>
//                     <div className='button'>
//                         <button type="submit">Login</button>

//                     </div>

//                     {message && <p className="message">{message}</p>}
//                     <div className="register">
//                         <p>
//                             Don't have an account? <Link to="/register">Register</Link>
//                         </p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;




// // - - - - - - - - - - - - - - - - working login with Conditional Rendering- - - - - - - - -- - -  -- - -- - - -



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setLoggedInStatus }) => {
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

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

            if (response.status === 200) {
                localStorage.setItem('token', data.jwt); // Store JWT token in localStorage
                setLoggedInStatus(true); // Set logged in status to true
                setShowSuccess(true); // Show success message
                setTimeout(() => {
                    setShowSuccess(false); // Hide success message after 3 seconds
                    navigate('/userPage'); // Redirect to the user page on successful login
                }, 1000);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Login failed');
        }
    };

    return (
        <div className="login_page">
            <div className="form form-container">
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
                    <div className='button'>
                        <button type="submit">Login</button>
                    </div>
                    {message && <p className="message">{message}</p>}
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
