// src/pages/HomePage.jsx

import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import RoomCard from '../components/RoomCard';
import SearchBar from '../components/SearchBar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const HomePage = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        // Fetch rooms data from API
    }, []);

    return (
        <div>



            <Container>

                <SearchBar />

                <Grid container spacing={4}>
                    {rooms.map((room, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <RoomCard room={room} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default HomePage;
