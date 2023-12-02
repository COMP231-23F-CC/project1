// src/pages/UserProfilePage.jsx

import React, { useState, useEffect } from 'react';
import UserProfileComponent from '../components/UserProfileComponent';
import httpClient from '../api/httpClient';
import {useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom';

const UserProfilePage = ( props ) => {
    //get argument from the previous page
    //location.state.user
    const location =  useLocation();
    // console.log('location:', location)
    const user1 = location.state.user;

    const [user, setUser] = useState( );
    const [error, setError] = useState('');


    //load user data from local storage
    const userData = localStorage.getItem('user');
    // console.log('local storage user:', userData)

    const  navigate = useNavigate();


   const  localUser = JSON.parse(userData);


    useEffect(() => {





        const fetchUser = async () => {

            try {
                let userId ='';
                const userData =   localStorage.getItem('user');
                // console.log('userData:', userData)
                if(userData)
                {
                    var loginUser= JSON.parse(userData);
                    setUser(loginUser);
                    return;
                }
                else {
                    navigate('/login');
                }
            } catch (err) {
                setError(err.message);
            }
        };
        fetchUser();
    }, []);

    return (
        <div>

            <UserProfileComponent user={user} />

            {/*Logout*/}
            <button onClick={() => {
                localStorage.removeItem('user');
                navigate('/login');
            }}>Logout</button>

            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default UserProfilePage;
