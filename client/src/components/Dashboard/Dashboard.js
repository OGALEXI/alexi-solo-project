import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Homepage from '../Homepage/Homepage';
import Logout from '../Logout/Logout';
import Splashpage from '../Splashpage/Splashpage';

const Dashboard = ({ setIsAuthenticated }) => {
    return (
        <div className="dashboard">
            <Routes>
                <Route path="/signup" render={(props) => (
                    <Signup {...props} setIsAuthenticated={setIsAuthenticated} />
                )}/>
                <Route path="/login" render={(props) => (
                    <Login {...props} setIsAuthenticated={setIsAuthenticated} />
                )}/>
                <Route path="/homepage" component={Homepage} />
                <Route path="/logout" render={(props) => (
                    <Logout {...props} setIsAuthenticated={setIsAuthenticated} />
                )} />
                <Route path="/" component={Splashpage} />
            </Routes>
        </div>
    )
}

export default Dashboard;