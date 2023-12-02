// src/components/SearchBar.jsx
import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState ,useContext} from 'react';
import { Box, TextField, Button } from '@mui/material';
import dayjs from 'dayjs';
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import InputAdornment from '@mui/material/InputAdornment';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const SearchBar = ({ initialSearchParams, onSearch }) => {
    const [checkIn, setCheckIn] = useState(initialSearchParams.checkIn || '');
    const [checkOut, setCheckOut] = useState(initialSearchParams.checkOut || '');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch({ checkIn, checkOut });
    };

    const [value, setValue] = React.useState(dayjs(checkIn));

    const changeCheckIn = (newValue) => {
        //show new date
        console.log('changeCheckIn ',newValue);
        setValue(newValue);
        setCheckIn(newValue);
    }

    return (
        <div>




        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Check-in"
                    value={value}
                    onChange={changeCheckIn}
                    required
                />
            </LocalizationProvider>

            <TextField
                id="check-in"
                label="Check-in Date"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                required
                sx={{ width: 'auto', minWidth: 200, mr: 2 }}
                InputLabelProps={{ shrink: true }}
            />
            <TextField
                id="check-out"
                label="Check-out Date"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                InputLabelProps={{ shrink: true }}
                required
            />
            <Button type="submit" variant="contained" sx={{ ml: 2 }}>
                Search
            </Button>
        </Box>
        </div>
    );
};

export default SearchBar;
