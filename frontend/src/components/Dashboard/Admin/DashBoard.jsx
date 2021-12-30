/** @format */

import React, { Fragment } from "react";
// import axios from 'axios';

import { connect } from "react-redux";

import { Grid } from "@mui/material";
import {
  LineChart,
  LineChart2,
  RadialBarChart,
  RadialBarChart2,
} from "./Charts";

import { AdminCards } from "../Cards";
import Map from "./Map";

import NewAccounts from "./NewAccounts";
import EmpOversite from "./EmpOversite";

const DashBoard = () => {
  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item lg={12} xs={12}>
          <AdminCards />
        </Grid>
        <Grid item lg={12} xs={12}>
          <Grid container spacing={2}>
            <Grid item lg={7} xs={12}>
              <NewAccounts />
            </Grid>
            <Grid item lg={5} xs={12}>
              <Map />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Grid container spacing={2}>
            <Grid item lg={2} xs={12}>
              <EmpOversite />
            </Grid>
            <Grid item lg={4} xs={12}>
              <RadialBarChart />
            </Grid>
            <Grid item lg={6} xs={12}>
              {/* <Progress /> */}
              <LineChart2 />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={8} xs={12}>
          <LineChart />
        </Grid>
        <Grid item lg={4} xs={12}>
          <RadialBarChart2 />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default DashBoard;
