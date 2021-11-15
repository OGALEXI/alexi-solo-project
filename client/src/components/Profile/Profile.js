import React, { useEffect, useState } from 'react';
import ApiService from '../../ApiService';
import './Profile.css';

const initialState = {
    name: ''
}

const Profile = () => {
    const [state, setState] = useState(initialState);

    const name = state.name || 'Friend'

    useEffect(() => {
        const getProfile = async () => {
            const userInfo = await ApiService.getUserProfile();
            if (userInfo) {
                const { name } = userInfo;
                setState((prevState) => {
                    return {
                        ...prevState,
                        name
                    };
                })
            } else {
                console.log('No user info found');
            }
        }
        getProfile();
    }, []);

    return (
        <div className="profile">
            <h3 className="welcome-banner">
                Welcome back, {name}! How are you?
            </h3>
            <div className="crisis-box1">
                <p>For crisis help call:</p>
                <p className="small-p">1-800-273-8255</p>
            </div>
            <div className="crisis-box2">
                <p>The TrevorLifeline for LGBTQ+ crisis:</p>
                <p className="small-p2">1-866-488-7386</p>
            </div>
        </div>
    )
}

export default Profile;