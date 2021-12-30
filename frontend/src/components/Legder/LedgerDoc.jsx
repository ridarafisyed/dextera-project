/** @format */

import React, { Fragment } from "react";
import { Grid, Box, Typography, Paper, TextField } from "@mui/material";
import { LinkButton } from "../../styles/styles";

const LedgerDoc = () => {
  return (
    <Fragment>
      <Box p={3}>
        <LinkButton to="/ledgers" sx={{ float: "right" }}>
          Ledger Dashboard
        </LinkButton>
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Box
            sx={{
              height: "80%",
              width: "80%",
              padding: "5rem 2rem 5rem 2rem",
              backgroundColor: "darkGray",
              borderRadius: "2rem",
            }}
          >
            MS Word Document On Pleading or Non Pleading Paper
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              height: "80%",
              padding: "5rem 2rem 5rem 2rem",
              width: "80%",
              backgroundColor: "darkGray",
              borderRadius: "2rem",
            }}
          >
            Space for 2nd Document to be opend if user wants it
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Grid container>
            <Grid item xs={12}>
              <Box component={Paper} p={2} sx={{ borderRadius: "1rem" }}>
                <Typography mt={2}>Related Document</Typography>
                <Typography mt={2}>Related Document</Typography>
                <Typography mt={2}>Related Document</Typography>
                <Typography mt={2}>Related Document</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box component={Paper} mt={2} p={2} sx={{ borderRadius: "1rem" }}>
                <TextField
                  fullWidth
                  multiline
                  rows={5}
                  size="small"
                  margin="normal"
                  variant="filled"
                  name="detail"
                  type="text"
                  value="Quick Notes"
                  id="detail"
                  sx={{ borderRadius: "1rem" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LedgerDoc;
