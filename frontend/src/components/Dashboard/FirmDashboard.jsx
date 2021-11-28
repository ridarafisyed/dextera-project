/** @format */

import React, { useState, Fragment } from 'react';
// import axios from 'axios';

import { connect } from 'react-redux';

import { Box, Button, Paper, Grid, IconButton, Tab } from '@mui/material';
import {} from '@mui/lab';
import { SideBarBtn } from '../../styles/styles';
import {
  TodayRounded,
  TrendingUp,
  KeyboardArrowDown,
  Task,
  MoneyOff,
  MonetizationOn,
  FileCopy,
  HourglassBottom,
  AssignmentTurnedIn,
  Map,
  AddCircle,
  TodayOutlined,
  PaymentRounded,
  ArrowBackIos,
  ArrowForwardIos,
} from '@mui/icons-material';

import Calender from './components/Calender';
import Tasks from './components/Tasks';
import ProgressBar from './components/ProgressBar';

import { useToggle } from '../../context/useToggle';
import Cards from './components/Cards';
import { cardData } from '../../data/data';

const FirmDashboard = () => {
  const [revToggle, setRevToggle] = useToggle(true);
  const [empToggle, setEmpToggle] = useToggle(true);
  const [cardsToggle, setCardsToggle] = useToggle(true);
  const [sidebarToggle, setSidebarToggle] = useToggle(true);

  const [calendarToggle, setCalendarToggle] = useToggle(true);
  const [tasksToggle, setTasksToggle] = useToggle(true);
  const [progressToggle, setProgressToggle] = useToggle(true);

  return (
    <>
      {/*main dashboard section for display  */}
      <Paper elevation={3} sx={{ minHeight: '84vh' }}>
        <Grid container px={2}>
          {cardsToggle ? (
            <Grid item xs={12} mt={2}>
              {cardData.map((data, i) => (
                <Cards key={i} data={data} />
              ))}
            </Grid>
          ) : null}
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
        </Grid>
      </Paper>
    </>
  );
};

const mapStateToProps = (state) => ({
  // isAuthenticated: state.auth.isAuthenticated
  user: state.auth.user,
});
export default connect(mapStateToProps)(FirmDashboard);
