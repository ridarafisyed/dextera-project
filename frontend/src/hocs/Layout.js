import React from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../actions/auth';

import { ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import theme from './Theme'
const Layout = ({ checkAuthenticated, load_user, children }) => {

    return (
        <ThemeProvider theme={theme}>
            <Grid contianer rowSpacing={5} columnSpacing={5}>
                <Grid item> <Navbar /></Grid>          
                <Grid >
                    {children}
                </Grid>  
            </Grid>
        </ThemeProvider>
    );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
