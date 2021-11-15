import React from 'react';
import ApiService from '../../ApiService';
import { Link, useNavigate } from 'react-router-dom';
import './Logout.css';

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
        <div className="logout">
            <h2>Are you sure you want to log out?</h2>
            <Link className="no-btn" to="/profile">
                <button className="btn" >No</button>
            </Link>
            <button className="yes-btn" onClick={() => handleClick()}>Yes</button>
        </div>
    )
}

export default Logout;