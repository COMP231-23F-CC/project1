// src/components/NavBar.jsx

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Booking
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
