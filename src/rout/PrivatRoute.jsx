import React, { useContext } from 'react';
import { AuthContex } from '../provider/Provider';
import { Navigate } from 'react-router';

const PrivatRoute = ({ children }) => {
    const { user, loding } = useContext(AuthContex);
    if (loding) {
        return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" replace={true} ></Navigate >
};

export default PrivatRoute;