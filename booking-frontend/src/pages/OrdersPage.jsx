// src/pages/OrdersPage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { API_BASE_URL } from '../config';
const OrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/room`   ); // 替换为您的后端 API
                setOrders(response.data);
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

export default OrdersPage;
