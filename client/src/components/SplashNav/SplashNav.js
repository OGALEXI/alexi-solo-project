import React from 'react';
import { Link } from 'react-router-dom';

const SplashNav = ({ isAuthenticated }) => {
    return (
        <div className="splashnav">
            <ul>
                <li>
                    <Link to="/">
                        <div>Splashpage</div>
                    </Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/homepage">Homepage</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
            </ul>
        </div>
    )
}

export default SplashNav;