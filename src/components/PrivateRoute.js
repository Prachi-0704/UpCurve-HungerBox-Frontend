// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ loggedInStatus, children }) => {
    return loggedInStatus ? children : <Navigate to="/" />;
};

export default PrivateRoute;
