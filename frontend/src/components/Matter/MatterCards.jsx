/** @format */

import React, { Fragment } from "react";
import { Grid, Card, Button, Typography } from "@mui/material";

import { LinkButton } from "../../styles/styles";

const MatterCards = () => {
  return (
    <Fragment>
      <Grid container spacing={2} mt={1.5}>
        <Grid item xs={9}>
          <Grid container spacing={2}>
            <Grid item>
              <Card
                sx={{
                  minWidth: 175,
                  borderRadius: "1rem",
                  backgroundColor: "red",
                  color: "white",
                }}
              >
                <Grid container p={2}>
                  <Grid item xs={8}>
                    <Typography
                      component="span"
                      sx={{ fontSize: 14 }}
                      gutterBottom
                    >
                      Urgent
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sx={{ textAlign: "right" }}>
                    <Typography variant="h5" component="h6">
                      0
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{
                  minWidth: 175,
                  borderRadius: "1rem",
                  backgroundColor: "orange",
                  color: "white",
                }}
              >
                <Grid container p={2}>
                  <Grid item xs={8}>
                    <Typography
                      component="span"
                      sx={{ fontSize: 14 }}
                      gutterBottom
                    >
                      Concern
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sx={{ textAlign: "right" }}>
                    <Typography variant="h5" component="h6">
                      0
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{
                  minWidth: 175,
                  borderRadius: "1rem",
                  backgroundColor: "green",
                  color: "white",
                }}
              >
                <Grid container p={2}>
                  <Grid item xs={8}>
                    <Typography
                      component="span"
                      sx={{ fontSize: 14 }}
                      gutterBottom
                    >
                      Start
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sx={{ textAlign: "right" }}>
                    <Typography variant="h5" component="h6">
                      0
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{
                  minWidth: 175,
                  borderRadius: "1rem",
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                <Grid container p={2}>
                  <Grid item xs={8}>
                    <Typography
                      component="span"
                      sx={{ fontSize: 14 }}
                      gutterBottom
                    >
                      New
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sx={{ textAlign: "right" }}>
                    <Typography variant="h5" component="h6">
                      0
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            sx={{
              minWidth: 100,
              height: 40,
              borderRadius: "0.5rem",
              backgroundColor: "white",
              color: "black",
            }}
          >
            Import
          </Button>
          <LinkButton to="/create-matter"> + New </LinkButton>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MatterCards;
