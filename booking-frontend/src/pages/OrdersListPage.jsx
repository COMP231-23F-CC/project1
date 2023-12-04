// src/pages/OrdersListPage.jsx

import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import api from '../api/httpClient.js';

import OrdersTableComponent from '../components/OrdersTableComponent';

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



    const handleGuestInfoChange = (orderIndex, field, value) => {
        const updatedOrders = orders.map((order, index) => {
            if (index === orderIndex) {
                return { ...order, [field]: value };
            }
            return order;
        });
        setOrders(updatedOrders);
    };



    if (loading) {
        return <Typography>Loading orders...</Typography>;
    }

    if (error) {
        return <Typography color="error">Error: {error}</Typography>;
    }

    return (
        <div>
            <Typography variant="h4">Your Orders</Typography>
            <OrdersTableComponent orders={orders} onGuestInfoChange={handleGuestInfoChange} />
        </div>
    );
};

export default OrdersListPage;
