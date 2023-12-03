// src/components/BookingComponent.jsx

import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import httpClient from '../api/httpClient';

const BookingComponent = ({ room }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleBooking = async () => {
        setIsLoading(true);
        try {
            await httpClient.post('/booking', {
                roomId: room.id,
                startDate: startDate,
                endDate: endDate
            });
            alert('Booking successful!');
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    };

    return (
        <div>
            <Typography variant="h6">Book Room {room.name}</Typography>
            <TextField
                label="Start Date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
            />
            <TextField
                label="End Date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
            />
            <Button onClick={handleBooking} disabled={isLoading}>
                Book Now
            </Button>
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default BookingComponent;
