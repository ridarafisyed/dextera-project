import React from 'react'
import {Grid, Box, Container} from '@mui/material'

import Dashboard from '../components/Dashboard/'


const DashBoard = () => {
    return (
        <Container maxWidth="xl">
        
            <Grid container component="main" spacing={3} 
                sx={{
                    height: '87vh',
                    marginTop:'1px'}}>
                <Dashboard/>
            </Grid>
           
        </Container>
    )
}

export default DashBoard
