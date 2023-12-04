// src/pages/SomePage.jsx

import React, { useState } from 'react';
import BookingComponent from '../components/BookingComponent.jsx';
import  {useNavigate} from 'react-router-dom';
import api from '../api/httpClient.js';

const SomePage = () => {
    const [booking, setBooking] = useState({
        // 假设的初始订单数据
        roomNumber: '101',
        roomName: 'Deluxe Suite',
        description: 'A luxurious room with ocean view',
        guestName: 'John Doe',
        phone: '123-456-7890',
        price: '200'
    });

    const handleGuestInfoChange = (field, value) => {
        setBooking({ ...booking, [field]: value });
    };


    //confirm booking button
    const navigate = useNavigate();
    const handleConfirmBooking = () => {

        //send booking data to backend
        const res =   api.post('/booking', booking).then((res) => {
            console.log('handleConfirmBooking res.data:', res.data);

            //goto my order list page
            navigate('/myorders');

        }
        ).catch((err) => {
            console.log('handleConfirmBooking err:', err);
        });











        alert("Booking confirmed!");
        navigate('/booking');
    };

    return (
        <div>
            <BookingComponent booking={booking} onGuestInfoChange={handleGuestInfoChange} />

             {/*confirm booking button*/}
            <button
            onClick={ handleConfirmBooking}
            >Confirm Booking</button>




        </div>
    );
};

export default SomePage;
