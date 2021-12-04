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
    // alerts: "",
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
    // alerts,
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
            <TextField
              margin="normal"
              variant="standard"
              name="matter_type"
              label="matter_type"
              type="text"
              value="matter_type"
              onChange={(e) => onChange(e)}
              id="matter_type"
              autoComplete="matter_type"
            />
            <TextField
              margin="normal"
              variant="standard"
              name="matter_source"
              label="matter_source"
              type="text"
              value="matter_source"
              onChange={(e) => onChange(e)}
              id="matter_source"
              autoComplete="matter_source"
            />
            <TextField
              margin="normal"
              variant="standard"
              name="matter_status"
              label="matter_status"
              type="text"
              value="matter_status"
              onChange={(e) => onChange(e)}
              id="matter_status"
              autoComplete="matter_status"
            />
            <TextField
              margin="normal"
              variant="standard"
              name="assign_to"
              label="assign_to"
              type="text"
              value="assign_to"
              onChange={(e) => onChange(e)}
              id="assign_to"
              autoComplete="assign_to"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="normal"
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
              name="billing_rate"
              label="billing_rate"
              type="text"
              value="billing_rate"
              onChange={(e) => onChange(e)}
              id="billing_rate"
              autoComplete="billing_rate"
            />
            <TextField
              margin="normal"
              variant="standard"
              name="open"
              label="open"
              type="text"
              value="open"
              onChange={(e) => onChange(e)}
              id="open"
              autoComplete="open"
            />
            <TextField
              margin="normal"
              variant="standard"
              name="closed"
              label="closed"
              type="text"
              value="closed"
              onChange={(e) => onChange(e)}
              id="closed"
              autoComplete="closed"
            />
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default NewMatter;
