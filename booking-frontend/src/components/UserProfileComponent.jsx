// src/components/UserProfileComponent.jsx

import React from 'react';
import { Typography } from '@mui/material';

const UserProfileComponent = ({ user }) => {
    if (!user) return <Typography>No user data</Typography>;

    return (
        <div>
            <Typography variant="h6">User Profile</Typography>
            <Typography>{`Name: ${user.name}`}</Typography>
            <Typography>{`Email: ${user.email}`}</Typography>


            {/* 更多用户信息 */}
        </div>
    );
};

export default UserProfileComponent;
