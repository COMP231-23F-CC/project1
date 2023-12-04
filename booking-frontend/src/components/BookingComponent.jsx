// src/components/BookingCard.jsx

import React from 'react';
import { Card, CardContent, Typography, TextField, Grid } from '@mui/material';

const BookingCard = ({ booking, onGuestInfoChange }) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6">Booking Details</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>Room Number:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>{booking.roomNumber}</Typography>
                    </Grid>
                    {/* Repeat for other details */}
                    <Grid item xs={6}>
                        <Typography>Room Name:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>{booking.roomName}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>Description:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>{booking.description}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>Price:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>{booking.price}</Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography>Guest Name:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            value={booking.guestName}
                            onChange={(e) => onGuestInfoChange('guestName', e.target.value)}
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>Phone:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            value={booking.phone}
                            onChange={(e) => onGuestInfoChange('phone', e.target.value)}
                            size="small"
                        />
                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    );
};

export default BookingCard;
