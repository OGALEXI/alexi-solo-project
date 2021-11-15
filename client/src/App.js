import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import auth from './auth';

import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Profile from './components/Profile/Profile';

import './App.css';

function App() {

  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);

  return (
      <BrowserRouter>
        <div className="app">
          <nav className="nav-bar">
            BrainBuddy
            <ul>
              <li className="home"><Link to={'/'}>Home</Link></li>
              {isAuthenticated ? (
              <React.Fragment>
              <li><Link to={'/logout'}>Logout</Link></li>
              <li><Link to={'./profile'}>Profile</Link></li>
              </React.Fragment>
              ) : (
              <React.Fragment>
              <li><Link to={'/signup'}>Signup</Link></li>
              <li><Link to={'/login'}>Login</Link></li>
              </React.Fragment>
              )}
            </ul>
          </nav>
          <Routes>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}> </Route>
            <Route path="/profile" element={<Profile/>} />
            <Route path="/logout" element={<Logout/>} render={(props) => (
                <Logout {...props} setIsAuthenticated={setIsAuthenticated} />
                )}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;