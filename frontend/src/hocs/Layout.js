/** @format */

import React, { Fragment } from 'react';
import Navbar from '../components/Navbars/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../actions/auth';

import { ThemeProvider } from '@mui/material/styles';
import { Grid, Box } from '@mui/material';
import theme from './Theme';
const Layout = ({
  checkAuthenticated,
  load_user,
  children,
  isAuthenticated,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid contianer rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>

        {isAuthenticated ? (
          <Grid container direction="row" wrap="nowrap">
            <Grid item xs={2} m={3}>
              <Sidebar />
            </Grid>
            <Grid item xs={10} p={3}>
              {children}
            </Grid>
          </Grid>
        ) : (
          <Grid item xs={12}>
            {children}
          </Grid>
        )}
      </Grid>
    </ThemeProvider>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { checkAuthenticated, load_user })(
  Layout,
);
