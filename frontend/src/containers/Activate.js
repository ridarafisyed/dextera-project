import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';

import {
  
    Button, 

    Grid,
    Box,
    Typography,


} from '@mui/material';

const Activate = ({ verify, match }) => {
    const [verified, setVerified] = useState(false);

    const verify_account = e => {
        const uid = match.params.uid;
        const token = match.params.token;

        verify(uid, token);
        setVerified(true);
    };

    if (verified) {
        return <Redirect to='/' />
    }

    return (
        <Grid>
        <Box
            sx={{
                my: 15,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}>
            <Typography component="h1" variant="h3">
            Verify your Account:     
            </Typography>
            
            <Button 
                        onClick={verify_account}
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }} to='/login' role='button'>
                    Verify
                </Button>
            </Box>
        </Grid>
    );
};

export default connect(null, { verify })(Activate);
