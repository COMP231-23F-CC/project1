// src/pages/SomePage.jsx

import React, {useEffect, useState} from 'react';

import {useNavigate, useLocation, useSearchParams} from 'react-router-dom';
import api from '../api/httpClient.js';


import BookingComponent from '../components/BookingComponent.jsx';
const BookingPage =   () => {
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);






    const location = useLocation();
    //show the data
    console.log('BookingPage location.state:', location.state);
    //
    const roomId = location.state?.roomId;
    const checkIn = location.state?.checkIn;
    const checkOut = location.state?.checkOut;

    const option = {
        roomId,
        checkIn,
        checkOut
    }


    const [booking, setBooking] = useState({ });



    //get roomdata by roomId
    const fetchBookingData = async ( ) => {
        try {
            const res = await api.get('/room/'+roomId);
            //show the data
            console.log('getRoom res.data:', res.data);

           var bookingData= {
                ...res.data,
                ...option
            }
            console.log('bookingData:', bookingData);

            //set room data
            setBooking(bookingData);
        } catch (err) {
           setError(err.message);
        } finally {
            setLoading(false);
        }
    }



    const handleGuestInfoChange = (field, value) => {
        setBooking({...booking, [field]: value});
    };


    const handleConfirmBooking = () => {

        //send booking data to backend
        const res = api.post('/booking', booking).then((res) => {


                console.log('handleConfirmBooking res.data:', res.data);

                //goto my order list page


            }
        ).catch((err) => {
            console.log('handleConfirmBooking err:', err);
        });


        alert("Booking confirmed!");

    };


    useEffect(() => {
        fetchBookingData( );
    }, [ ]);


    // if (loading) return <Typography>Loading...</Typography>;
    // if (error) return <Typography color="error">{error}</Typography>;

    return (
        <div>
            <BookingComponent booking={booking} onGuestInfoChange={handleGuestInfoChange}/>

            {/*confirm booking button*/}
            <button
                onClick={handleConfirmBooking}
            >Confirm Booking
            </button>


        </div>
    );
};

export default BookingPage;
