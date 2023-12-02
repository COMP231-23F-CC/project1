// src/components/RoomCard.jsx

import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const RoomCard = ({ room }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={room.imageUrl}
                alt={room.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {room.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {room.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default RoomCard;
