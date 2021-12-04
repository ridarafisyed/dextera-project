/** @format */

import React, { Fragment, useState } from "react";
import {
  TextField,
  Box,
  Grid,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const NewMatter = () => {
  const [matterData, setMatterData] = useState({
    contact: "",
    matter_number: "",
    matter_name: "",
    alerts: "",
    matter_type: "",
    matter_source: "",
    matter_status: "",
    assign_to: "",
    billing_rate: "",
    open: "",
    closed: "",
    total_days: "",
    jurisdiction: "",
    status_limitaion: "",
    opposing_counsel: "",
    where: "",
    when: "",
    involved: "",
    witnesses: "",
    narrative: "",
  });

  const {
    contact,
    matter_number,
    matter_name,
    alerts,
    matter_type,
    matter_source,
    matter_status,
    assign_to,
    billing_rate,
    open,
    closed,
    total_days,
    jurisdiction,
    status_limitaion,
    opposing_counsel,
    where,
    when,
    involved,
    witnesses,
    narrative,
  } = matterData;

  const onChange = (e) =>
    setMatterData({ ...matterData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    // login(username, email, password);
  };
  return (
    <Fragment>
      <Box
        component="form"
        Validate
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        onSubmit={(e) => onSubmit(e)}
      >
        <Grid Container spacing={2}>
          <Grid item xs={6}>
            <TextField
              margin="normal"
              fullWidth
              variant="standard"
              name="contact"
              label="contact"
              type="text"
              value="contact"
              onChange={(e) => onChange(e)}
              id="contact"
              autoComplete="contact"
            />

            <TextField
              margin="normal"
              variant="standard"
              name="matter_number"
              label="matter_number"
              type="text"
              value="matter_number"
              onChange={(e) => onChange(e)}
              id="matter_number"
              autoComplete="matter_number"
              disabled
            />
            <TextField
              margin="normal"
              variant="standard"
              name="matter_name"
              label="matter_name"
              type="text"
              value="matter_name"
              onChange={(e) => onChange(e)}
              id="matter_name"
              autoComplete="matter_name"
            />
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default NewMatter;
