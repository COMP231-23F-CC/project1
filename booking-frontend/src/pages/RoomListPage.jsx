// src/pages/RoomListPage.jsx
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import RoomCard from '../components/RoomCard';
import api from '../api/axios.js';

const RoomListPage = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const res = await api.get('/room');
                //show the data
                console.log('data:', res);


                setRooms(res.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRooms();
    }, []);

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Available Rooms</Typography>
            <Grid container spacing={4}>
                {rooms.map(room => (
                    <Grid item key={room.id} xs={12} sm={6} md={4}>
                        <RoomCard room={room} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default RoomListPage;
