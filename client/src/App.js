import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import auth from './auth';

import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Logout from './components/Logout/Logout';
import Profile from './components/Profile/Profile';
import Journal from './components/Journal/Journal';
import Coping from './components/Coping/Coping';

import './App.css';

const initialUser = {
    username: '',
    password: ''
}

function App() {
  const [user, setUser] = useState(initialUser);
  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);
  

  return (
      <BrowserRouter>
        <div className="app">
          <nav className="nav-bar">
            BrainBuddy
            <ul>
              {isAuthenticated ? (
                <React.Fragment>
              <li><Link to={'./profile'}>Profile</Link></li>
              <li><Link to={'./journal'}>Journal</Link></li>
              <li><Link to={'./coping'}>Coping</Link></li>
              <li><Link to={'/logout'}>Logout</Link></li>
              </React.Fragment>
              ) : (
              <React.Fragment>
              <li className="home"><Link to={'/'}>Home</Link></li>
              <li><Link to={'/signup'}>Signup</Link></li>
              </React.Fragment>
              )}
            </ul>
          </nav>
          <Routes>
            <Route 
              path="/"
              element={<Home setIsAuthenticated={setIsAuthenticated} user={user} setUser={setUser} />}></Route>
            <Route 
              path="/signup"
              element={<Signup setIsAuthenticated={setIsAuthenticated} user={user} setUser={setUser} />}></Route>
            <Route path="/profile" element={<Profile />} />
            <Route 
              path="/journal"
              element={<Journal user={user} setUser={setUser} />}></Route>
            <Route path="/coping" element={<Coping />} />
            <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated} />} ></Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;