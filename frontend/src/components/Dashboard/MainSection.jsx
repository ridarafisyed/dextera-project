import React from 'react';
import {Typography, Paper} from '@mui/material'
import Calender from './components/Calender';

// import 'react-calendar/dist/Calendar.css';

const MainSection = () => {
    return (
        <>
        <Paper elevation={3} sx={{minHeight:'84vh'}}  >
            <Typography 
                component="h3"
                align='center'
                variant='h5'

            >
                Dashboard
            </Typography>
            <Calender/>
        </Paper>
    </>
    )
}

export default MainSection
