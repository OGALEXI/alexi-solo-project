import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import auth from './auth';
import Dashboard from './components/Dashboard/Dashboard';
import SplashNav from './components/SplashNav/SplashNav';

import './App.css';

function App() {

  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);

  return (
    <div className="App">
      <Router>
        <SplashNav isAuthenticated={isAuthenticated} />
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
      </Router>
    </div>
  );
}

export default App;
