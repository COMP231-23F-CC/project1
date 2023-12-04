// src/pages/OrdersListPage.jsx

import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import api from '../api/httpClient.js';
const OrdersListPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await api.get('/booking');
                setOrders(res.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return <Typography>Loading orders...</Typography>;
    }

    if (error) {
        return <Typography color="error">Error: {error}</Typography>;
    }

    return (
        <div>
            <Typography variant="h4">Your Orders</Typography>
            <List>
                {orders.map(order => (
                    <ListItem key={order.id}>
                        <ListItemText
                            primary={`Order ID: ${order.id}`}
                            secondary={`Room ID: ${order.roomId} - Start Date: ${order.startDate} - End Date: ${order.endDate}`}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default OrdersListPage;
