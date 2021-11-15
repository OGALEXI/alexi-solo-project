import React from 'react';
import { useState } from 'react';
import auth from '../../auth';
import ApiService from '../../ApiService';
import { Link } from 'react-router-dom';
import './Home.css';

const initialState = {
    username: '',
    password: ''
}


const Home = (props) => {
    const [state, setState] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, password } = state;
        const user = { username, password };
        const res = await ApiService.signup(user);

        if (res.error) {
            alert(`${res.message}`);
            setState(initialState);
        } else {
            props.setIsAuthenticated(true);
            auth.login(() => props.history.push('/profile'));
        }

  };

    const validateForm = () => {
        return !state.username || !state.password;
    };

    return (
        <div>
            <div className="welcome-box">
                <h2>Welcome to BrainBuddy!</h2>
                <h3>We're here to help you track your progress with your mental health, and give you an outlet for your thoughts. Login or sign up to begin your mental health journey!</h3>
            </div>
            <form className="home-login-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={state.username}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                />
                <button className="home-login-button" type="submit" disabled={validateForm()}>
                    Login
                </button>
            </form>
            <div className="signup-link">
                <p>Don't have an account? <Link to={'/signup'} className="link">Sign up here.</Link></p>
            </div>
        </div>
    )
}

export default Home;