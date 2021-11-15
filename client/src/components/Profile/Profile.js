import React, { useEffect, useState } from 'react';
import ApiService from '../../ApiService';

const initialState = {
    name: ''
};

const Profile = () => {

    const [state, setState] = useState(initialState);

    const name = state.name || 'Friend';

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
            <h3>
                Welcome back, {name}! How are you?
            </h3>
        </div>
    )
}

export default Profile;