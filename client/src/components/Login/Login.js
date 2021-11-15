import React, { useState } from 'react';
import ApiService from '../../ApiService';
import './Login.css';
import { useNavigate } from 'react-router';

const initialState = {
    username: '',
    password: ''
};

const Login = ({ setIsAuthenticated }) => {
    const [state, setState] = useState(initialState);
    const navigate = useNavigate();

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
        const res = await ApiService.login(user);
        navigate('/profile');
        
        if (res.error) {
            console.log(res.error);
            alert(`${res.message}`);
            setState(initialState);
        } else {
            setIsAuthenticated(true);
        }

  };

    const validateForm = () => {
        return !state.username || !state.password;
    };

    return (
        <div>
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login here!</h2>
                <input
                  type="text"
                  placeholder="Username"
                  className="username"
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
                <button className="login-button" type="submit" disabled={validateForm()}>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;