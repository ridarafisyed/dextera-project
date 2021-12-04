/** @format */

import React from "react";
// import axios from 'axios';

import { connect } from "react-redux";

import { Paper, Grid } from "@mui/material";

import { useToggle } from "../../../context/useToggle";

import Calender from "../../../components/Dashboard/Calender";
import ProgressBar from "../../../components/Dashboard/ProgressBar";

import Tasks from "../../../components/Dashboard/Tasks";

const ClientDashboard = () => {
  const [calendarToggle, setCalendarToggle] = useToggle(true);
  const [tasksToggle, setTasksToggle] = useToggle(true);
  const [progressToggle, setProgressToggle] = useToggle(true);

  return (
    <>
      <Paper elevation={3} sx={{ minHeight: "84vh" }}>
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
