import React, { useState } from 'react';
import ApiService from '../../ApiService';
import './Signup.css';
import { useNavigate } from 'react-router';

const initialState = {
    name: '',
    username: '',
    password: ''
};

const Signup = ({ setIsAuthenticated }) => {
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

        const { name, username, password } = state;
        const user = { name, username, password };
        const res = await ApiService.signup(user);
        navigate('/');
        if (res.error) {
            alert(`${res.message}`);
            setState(initialState);
        } else {
            setIsAuthenticated(false);
        }
    }

    const validateForm = () => {
        return (
            !state.name || !state.username || !state.password
        );
    };

    return (
        <div> 
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="header">Sign up today!</h2>
                <input 
                  type="text"
                  placeholder="Name..."
                  className="name"
                  name="name"
                  value={state.name}
                  onChange={handleChange}
                />
                <input 
                  type="text"
                  placeholder="Username..."
                  name="username"
                  value={state.username}
                  onChange={handleChange}
                />
                <input 
                  type="text"
                  placeholder="Password..."
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                />
                <button className="form-submit" type="submit" disabled={validateForm()}>
                    Signup
                </button>
            </form>
        </div>
    )
}


export default Signup;