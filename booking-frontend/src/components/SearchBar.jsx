// src/components/SearchBar.jsx

import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchBar = ({ onSearch }) => {
    return (
        <form noValidate autoComplete="off" onSubmit={onSearch}>
            <TextField id="standard-basic" label="Search for hotels" variant="standard" />
            <Button type="submit" color="primary">Search</Button>
        </form>
    );
};

export default SearchBar;
