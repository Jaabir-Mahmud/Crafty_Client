import React from 'react';
import useAuth from '../Components/Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const CustomLoadingIndicator = () => {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <div className="loading-text">Loading...</div>
        </div>
    );
};

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth() || {};
    const location = useLocation();

    if (loading) {
        return <CustomLoadingIndicator />;
    }
    
    if (user) {
        return children;
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Unauthorized Access',
            text: 'Please log in to access this page.',
            showConfirmButton: false,
            timer: 2000 // Adjust the timer as needed
        });
        return <Navigate state={location.pathname} to="/login" replace />;
    }
};

export default ProtectedRoute;
