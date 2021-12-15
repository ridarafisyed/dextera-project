/** @format */

import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import NumberFormat from "react-number-format";

const Cards = () => {
  return (
    <>
      <Grid container m={2} spacing={1}>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Revenue In
              </Typography>
              <Typography variant="h3" component="h4">
                <NumberFormat
                  value={23345}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix="$"
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Revenue out
              </Typography>
              <Typography variant="h3" component="h4">
                <NumberFormat
                  value={13345}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix="$"
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                New Matters
              </Typography>
              <Typography variant="h3" component="h4">
                <NumberFormat
                  value={3425}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Cards;
