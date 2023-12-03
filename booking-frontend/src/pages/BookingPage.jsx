// src/pages/BookingPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import BookingComponent from '../components/BookingComponent';

const BookingPage = () => {
    const { roomId } = useParams();
    const room = { id: roomId, name: "Sample Room" }; // 从后端获取房间详细信息

    return (
        <div>
            <BookingComponent room={room} />
        </div>
    );
};

export default BookingPage;
