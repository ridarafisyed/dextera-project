/** @format */

import React, { useState, Fragment } from 'react';
// import axios from 'axios';

import { connect } from 'react-redux';

import { Box, Button, Paper, Grid } from '@mui/material';
import { SideBarBtn } from '../../styles/styles';

import Calender from './components/Calender';
import ProgressBar from './components/ProgressBar';

import { useToggle } from '../../context/useToggle';

import Tasks from './components/Tasks';

const ClientDashboard = () => {
  const [calendarToggle, setCalendarToggle] = useToggle(true);
  const [tasksToggle, setTasksToggle] = useToggle(true);
  const [progressToggle, setProgressToggle] = useToggle(true);

  return (
    <>
      <Paper elevation={3} sx={{ minHeight: '84vh' }}>
        <Grid container>
          {calendarToggle ? (
            <Grid item xs={4}>
              <Calender />
            </Grid>
          ) : null}
          {tasksToggle ? (
            <Grid item mt={3} p={2} xs={8}>
              <Tasks />
            </Grid>
          ) : null}
          {progressToggle ? (
            <Grid item xs={12}>
              <ProgressBar />
            </Grid>
          ) : null}
        </Grid>
      </Paper>
    </>
  );
};
const mapStateToProps = (state) => ({
  // isAuthenticated: state.auth.isAuthenticated
  user: state.auth.user,
});
export default connect(mapStateToProps)(ClientDashboard);
