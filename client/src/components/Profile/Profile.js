import React, { useEffect, useState } from 'react';
import ApiService from '../../ApiService';

const initialState = {
    name: ''
};

const Profile = () => {

    const [state, setState] = useState(initialState);

    const name = state.name || 'Friend';

    useEffect(() => {
        const getUserProfile = async () => {
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
        getUserProfile();
    }, []);

    return (
        <div className="profile">
            Profile
            <h2>My Profile</h2>
            <h3>
                Welcome back, {name}! How are you?
            </h3>
        </div>
    )
}

export default Profile;