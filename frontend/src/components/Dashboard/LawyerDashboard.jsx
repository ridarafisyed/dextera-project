/** @format */

import React, { useState, Fragment } from 'react';
// import axios from 'axios';

import { connect } from 'react-redux';

import { Box, Button, Paper, Grid } from '@mui/material';
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
} from '@mui/icons-material';

import Calender from './components/Calender';
import ProgressBar from './components/ProgressBar';

import { useToggle } from '../../context/useToggle';

import Tasks from './components/Tasks';

const LawyerDashboard = () => {
  const [revToggle, setRevToggle] = useToggle(true);
  const [empToggle, setEmpToggle] = useToggle(true);

  const [calendarToggle, setCalendarToggle] = useToggle(true);
  const [tasksToggle, setTasksToggle] = useToggle(true);
  const [progressToggle, setProgressToggle] = useToggle(true);

  return (
    <>
      <Grid item xs={2}>
        <Paper elevation={3} sx={{ minHeight: '84vh' }}>
          <Button
            variant="text"
            fullWidth
            endIcon={<KeyboardArrowDown />}
            sx={{ padding: '0.3em', marginTop: '0.5em', textTransform: 'none' }}
            onClick={() => setRevToggle(revToggle)}
          >
            Components
          </Button>

          {revToggle ? (
            <Box>
              <SideBarBtn
                variant="outlined"
                onClick={() => setCalendarToggle(calendarToggle)}
              >
                <Grid>
                  <Grid item>
                    <TodayRounded fontSize="medium" />
                  </Grid>
                  <Grid item>Calendar</Grid>
                </Grid>
              </SideBarBtn>
              <SideBarBtn
                variant="outlined"
                onClick={() => setTasksToggle(tasksToggle)}
              >
                <Grid>
                  <Grid item>
                    <Task fontSize="medium" />
                  </Grid>
                  <Grid item>Tasks</Grid>
                </Grid>
              </SideBarBtn>
              <SideBarBtn
                variant="outlined"
                onClick={() => setProgressToggle(progressToggle)}
              >
                <Grid>
                  <Grid item>
                    <TrendingUp fontSize="medium" />
                  </Grid>
                  <Grid item>Progress</Grid>
                </Grid>
              </SideBarBtn>
            </Box>
          ) : null}

          <Button
            variant="text"
            fullWidth
            endIcon={<KeyboardArrowDown />}
            sx={{ padding: '0.5em', marginTop: '0.5em', textTransform: 'none' }}
            onClick={() => setEmpToggle(empToggle)}
          >
            Employee Performance
          </Button>

          {empToggle ? (
            <Box>
              <SideBarBtn variant="outlined">
                <Grid>
                  <Grid item>
                    <AddCircle fontSize="medium" />
                  </Grid>
                  <Grid item>New Accounts</Grid>
                </Grid>
              </SideBarBtn>
              <SideBarBtn variant="outlined">
                <Grid>
                  <Grid item>
                    <Map fontSize="medium" />
                  </Grid>
                  <Grid item>Map</Grid>
                </Grid>
              </SideBarBtn>
              <SideBarBtn variant="outlined">
                <Grid>
                  <Grid item>
                    <AssignmentTurnedIn fontSize="medium" />
                  </Grid>
                  <Grid item>Task Completed</Grid>
                </Grid>
              </SideBarBtn>
              <SideBarBtn variant="outlined">
                <Grid>
                  <Grid item>
                    <HourglassBottom fontSize="medium" />
                  </Grid>
                  <Grid item>Billable Hour</Grid>
                </Grid>
              </SideBarBtn>
              <SideBarBtn variant="outlined">
                <Grid>
                  <Grid item>
                    <FileCopy fontSize="medium" />
                  </Grid>
                  <Grid item>Billable v Non-Billable</Grid>
                </Grid>
              </SideBarBtn>
              <SideBarBtn variant="outlined">
                <Grid>
                  <Grid item>
                    <MoneyOff fontSize="medium" />
                  </Grid>
                  <Grid item>Spending</Grid>
                </Grid>
              </SideBarBtn>
              <SideBarBtn variant="outlined">
                <Grid>
                  <Grid item>
                    <MonetizationOn fontSize="medium" />
                  </Grid>
                  <Grid item>Profit & Lost</Grid>
                </Grid>
              </SideBarBtn>
              <SideBarBtn variant="outlined">
                <Grid>
                  <Grid item>
                    <Task fontSize="medium" />
                  </Grid>
                  <Grid item>Tasks</Grid>
                </Grid>
              </SideBarBtn>
            </Box>
          ) : null}
        </Paper>
      </Grid>
      <Grid item xs={10}>
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
      </Grid>
    </>
  );
};
const mapStateToProps = (state) => ({
  // isAuthenticated: state.auth.isAuthenticated
  user: state.auth.user,
});
export default connect(mapStateToProps)(LawyerDashboard);
