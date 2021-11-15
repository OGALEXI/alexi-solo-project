import React from 'react';
import ApiService from '../../ApiService';
import { Link, useNavigate } from 'react-router-dom';

const Logout = ({setIsAuthenticated}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        ApiService.logout();
        handleAuth();
    };

    const handleAuth = () => {
        setIsAuthenticated(false);
        navigate('/');
    };

    return (
        <div>
            <h2>Are you sure you want to log out?</h2>
            <Link to="/">
                <button className="confirm-btn">No</button>
            </Link>
            <button className="confirm-btn" onClick={() => handleClick()}>Yes</button>
        </div>
    )
}

export default Logout;