/** @format */

import React, { Fragment } from "react";
import { Box, Grid, Typography } from "@mui/material";

import NumberFormat from "react-number-format";

const EmpOversite = () => {
  return (
    <Fragment>
      <Typography color="blue">Employee Oversite</Typography>
      <Typography variant="h3" component="h4" sx={{ fontSize: 36 }}>
        <NumberFormat
          value={3498}
          displayType={"text"}
          thousandSeparator={true}
        />
      </Typography>

      <Typography component="h5" sx={{ fontSize: 10 }}>
        Employees logged in
      </Typography>

      <Typography component="h5" sx={{ fontSize: 12 }}>
        <span style={{ color: "purple" }}> Total ticket issued:</span>
        <NumberFormat
          value={3498}
          displayType={"text"}
          thousandSeparator={true}
        />
      </Typography>
      <Typography component="h5" sx={{ fontSize: 12 }}>
        <span style={{ color: "seagreen" }}>Trouble ticket Resolved: </span>
        <NumberFormat
          value={3498}
          displayType={"text"}
          thousandSeparator={true}
        />
      </Typography>
    </Fragment>
  );
};

export default EmpOversite;
