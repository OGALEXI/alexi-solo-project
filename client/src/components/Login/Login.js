import React, { useState } from 'react';
import auth from '../../auth';
import ApiService from '../../ApiService';
import './Login.css';

const initialState = {
    name: '',
    username: '',
    password: ''
};

const Login = (props) => {
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

        const { name, username, password } = state;
        const user = { name, username, password };
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
            <form className="login-form" onSubmit={handleSubmit}>
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
                <button className="login-button" type="submit" disabled={validateForm()}>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;