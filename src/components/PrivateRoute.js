// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ loggedInStatus, children }) => {
    console.log('Private Route : LoggedInStatus: ', loggedInStatus);
    return loggedInStatus ? children : <Navigate to="/" />;
};

export default PrivateRoute;
