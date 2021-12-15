/** @format */

import { Typography, Box, Grid } from "@mui/material";
import React, { Fragment } from "react";
import Fillters from "./Fillters";
import LedgerCards from "./LedgerCards";
import LedgerTimeList from "./LedgerTImeList";
import { LinkButton } from "../../styles/styles";

const LegderDashbard = () => {
  return (
    <Fragment>
      <Typography component="h3" variant="h5">
        Legder
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box p={3}>
            <LinkButton to="/activity-list" sx={{ float: "right" }}>
              Activity
            </LinkButton>
            <LinkButton to="/ledger-list" sx={{ float: "right" }}>
              Ledger List
            </LinkButton>
            <LinkButton to="/ledger-documents" sx={{ float: "right" }}>
              Documents
            </LinkButton>
            <LinkButton to="/time-list" sx={{ float: "right" }}>
              Time List
            </LinkButton>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <LedgerCards />
          <Fillters />
          <LedgerTimeList />
        </Box>
      </Grid>
    </Fragment>
  );
};

export default LegderDashbard;
