// src/pages/RoomListPage.jsx
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import RoomCard from '../components/RoomCard';
import api from '../api/axios.js';
import {useSearchParams} from "react-router-dom";
import SearchBar from "../components/SearchBar";
import {Box} from "@mui/material";


const RoomListPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const checkIn = searchParams.get('checkIn');
    const checkOut = searchParams.get('checkOut');

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
    }, [checkIn, checkOut]);

    const handleSearch = (newSearchParams) => {
        // Update the URL with the new search parameters
        setSearchParams(newSearchParams);
    };

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                {/* Header with Hotel Name */}
                <Box sx={{ my: 4, textAlign: 'center' }}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Cachet Crossing at Blue Mountains, Ontario
                    </Typography>
                </Box>

                {/* Hotel Description and Details */}
                <Box sx={{ my: 4, mx: 2 }}>
                    <Typography variant="h5" gutterBottom>
                        Your Perfect Mountain Retreat
                    </Typography>
                    <Typography variant="body1" gutterBottom>

                    </Typography>
                </Box>
            {/*<SearchBar initialSearchParams={{ checkIn, checkOut }} onSearch={handleSearch} />*/}
            <SearchBar
                initialSearchParams={{
                    checkIn: new Date(), // Or any other default or state-driven values
                    checkOut: new Date(),
                }}
                onSearch={(start, end) => {
                    // Handle the search logic here, such as updating context or state
                    console.log(start, end);
                }}
            />

            <Typography variant="h4" gutterBottom>Available Rooms</Typography>
            <Grid container spacing={4}>
                {rooms.map(room => (
                    <Grid item key={room.id} xs={12} sm={6} md={4}>
                        <RoomCard room={room} />
                    </Grid>
                ))}
            </Grid>
                </Box>
        </Container>
    );
};

export default RoomListPage;
