/** @format */

import React from "react";
// import axios from 'axios';

import { connect } from "react-redux";
import { Paper, Grid } from "@mui/material";

import Calender from "../../../components/Dashboard/Calender";
import Tasks from "../../../components/Dashboard/Tasks";
import Cards from "../../../components/Dashboard/Cards";

import { cardData } from "../../../data/data";

import { useToggle } from "../../../context/useToggle";

const FirmDashboard = () => {
  // const [revToggle, setRevToggle] = useToggle(true);
  // const [empToggle, setEmpToggle] = useToggle(true);
  const [cardsToggle, setCardsToggle] = useToggle(true);
  // const [sidebarToggle, setSidebarToggle] = useToggle(true);

  const [calendarToggle, setCalendarToggle] = useToggle(true);
  const [tasksToggle, setTasksToggle] = useToggle(true);
  // const [progressToggle, setProgressToggle] = useToggle(true);

  return (
    <>
      {/*main dashboard section for display  */}
      <Paper elevation={3} sx={{ minHeight: "84vh" }}>
        <Grid container px={2}>
          {cardsToggle ? (
            <Grid item xs={12} mt={2}>
              <Cards />
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
