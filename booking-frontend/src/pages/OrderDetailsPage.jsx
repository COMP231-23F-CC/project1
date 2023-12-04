import React, { useState, useEffect } from 'react';
import {
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow
} from '@mui/material';
import api from '../api/httpClient';
import dayjs from "dayjs";
import { useParams, useNavigate } from 'react-router-dom';

const OrderDetailsPage = () => {
    const navigate = useNavigate();

    const { orderId } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleBack = () => {
        // navigate('/orders');
        navigate(-1);

    };


    const fetchOrderDetails = async () => {
        try {
            const response = await api.get(`/Booking/${orderId}`);
            setOrderDetails(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrderDetails();
    }, [orderId]); // Make sure to add orderId as a dependency here

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;
    if (!orderDetails) return <Typography>No order details found.</Typography>;

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>

        <Paper style={{ padding: '0px', marginTop: '50px' ,width: '60%' }}>
            <Typography variant="h4">Order Details</Typography>
            <TableContainer component={Paper}>
                <Table aria-label="order details table">
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">Order ID</TableCell>
                            <TableCell align="right">{orderDetails.id}</TableCell>
                        </TableRow>
                        {/* Repeat for each detail */}
                        <TableRow>
                            <TableCell component="th" scope="row">Guest Name</TableCell>
                            <TableCell align="right">{orderDetails.guestName}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Guest Phone</TableCell>
                            <TableCell align="right">{orderDetails.guestPhone}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Check In</TableCell>
                            <TableCell align="right">{dayjs(orderDetails.startDate).format('YYYY-MM-DD')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Check Out</TableCell>
                            <TableCell align="right">{dayjs(orderDetails.endDate).format('YYYY-MM-DD')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Room Number</TableCell>
                            <TableCell align="right">{orderDetails.room.number}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Room Type</TableCell>
                            <TableCell align="right">{orderDetails.room.type}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Total Price</TableCell>
                            <TableCell align="right">{`$${orderDetails.totalPrice}`}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Status</TableCell>
                            <TableCell align="right">{orderDetails.status}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Remark</TableCell>
                            <TableCell align="right">{orderDetails.remark}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <button onClick={handleBack}>Back</button>
                </div>

            </TableContainer>



        </Paper>

        </div>
    );
};

export default OrderDetailsPage;
