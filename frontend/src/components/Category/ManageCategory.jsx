/** @format */

import React, { Fragment, useState } from "react";

import { Typography, Grid } from "@mui/material";

import SubCategory from "./SubCategory";
import Category from "./Category";
import Classification from "./Classification";

const ManageCategory = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={8}>
          <Typography component="h3" variant="h5">
            Manage Category, Sub-category, Classification
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={5} mt={1}>
            <Grid item xs={4}>
              <Category />
            </Grid>
            <Grid item xs={4}>
              <SubCategory />
            </Grid>
            <Grid item xs={4}>
              <Classification />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ManageCategory;
