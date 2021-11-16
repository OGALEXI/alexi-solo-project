import React from 'react';
import ApiService from '../../ApiService';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const Home = ({setIsAuthenticated, user, setUser }) => {
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, password } = user;
        const userBoi = { username, password };
        const res = await ApiService.login(userBoi);
        navigate('/profile');
        
        if (res.error) {
            console.log(res.error);
            alert(`${res.message}`);
        } else {
            setUser(userBoi);
            setIsAuthenticated(true);
            setUser({ username: '', password: '' });
        }

  };

    const validateForm = () => {
        return !user.username || !user.password;
    };

    return (
        <div>
            <div className="welcome-box">
                <h2 className="welcome-bb">Welcome to BrainBuddy!</h2>
                <h3>We're here to help you track your progress with your mental health, and give you an outlet for your thoughts. Login or sign up to begin your mental health journey!</h3>
            </div>
            <form className="home-login-form" onSubmit={handleSubmit}>
                <h4 className="welcome">Welcome back.</h4>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  value={user.password}
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