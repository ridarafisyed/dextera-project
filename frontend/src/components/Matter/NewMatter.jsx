/** @format */

import React, { Fragment, useState } from "react";
import {
  TextField,
  Box,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

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

  // const {
  //   contact,
  //   matter_number,
  //   matter_name,
  //   alerts,
  //   matter_type,
  //   matter_source,
  //   matter_status,
  //   assign_to,
  //   billing_rate,
  //   open,
  //   closed,
  //   total_days,
  //   jurisdiction,
  //   status_limitaion,
  //   opposing_counsel,
  //   where,
  //   when,
  //   involved,
  //   witnesses,
  //   narrative,
  // } = matterData;

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
        <Typography component="h3" variant="h4">
          Create New Matter
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="contact"
              label="contact"
              type="text"
              value="contact"
              onChange={(e) => onChange(e)}
              id="contact"
              autoComplete="contact"
              sx={{
                width: "97%",
              }}
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="matter_number"
              label="matter_number"
              type="text"
              value="matter_number"
              onChange={(e) => onChange(e)}
              id="matter_number"
              autoComplete="matter_number"
              disabled
              sx={{
                width: "48%",
              }}
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="matter_name"
              label="matter_name"
              type="text"
              value="matter_name"
              onChange={(e) => onChange(e)}
              id="matter_name"
              autoComplete="matter_name"
              sx={{
                width: "47%",
              }}
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="alerts"
              label="alerts"
              type="text"
              value="alerts"
              onChange={(e) => onChange(e)}
              id="alerts"
              autoComplete="alerts"
              sx={{
                width: "97%",
              }}
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="matter_type"
              label="matter_type"
              type="text"
              value="matter_type"
              onChange={(e) => onChange(e)}
              id="matter_type"
              autoComplete="matter_type"
              sx={{
                width: "48%",
              }}
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="matter_source"
              label="matter_source"
              type="text"
              value="matter_source"
              onChange={(e) => onChange(e)}
              id="matter_source"
              autoComplete="matter_source"
              sx={{
                width: "47%",
              }}
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="matter_status"
              label="matter_status"
              type="text"
              value="matter_status"
              onChange={(e) => onChange(e)}
              id="matter_status"
              autoComplete="matter_status"
              sx={{
                width: "48%",
              }}
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="assign_to"
              label="assign_to"
              type="text"
              value="assign_to"
              onChange={(e) => onChange(e)}
              id="assign_to"
              autoComplete="assign_to"
              sx={{
                width: "47%",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="billing_rate"
              label="billing_rate"
              type="text"
              value="billing_rate"
              onChange={(e) => onChange(e)}
              id="billing_rate"
              autoComplete="billing_rate"
            />
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="open"
              label="open"
              type="text"
              value="open"
              onChange={(e) => onChange(e)}
              id="open"
              autoComplete="open"
            />
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="closed"
              label="closed"
              type="text"
              value="closed"
              onChange={(e) => onChange(e)}
              id="closed"
              autoComplete="closed"
            />
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="total_days"
              label="total_days"
              type="text"
              value="total_days"
              onChange={(e) => onChange(e)}
              id="total_days"
              autoComplete="total_days"
            />
          </Grid>

          <Grid item xs={4}>
            <br />
            <Typography component="h5" variant="h6">
              Legal Concerns
            </Typography>
            <br />
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="jurisdiction"
              label="jurisdiction"
              type="text"
              value="jurisdiction"
              onChange={(e) => onChange(e)}
              id="jurisdiction"
              autoComplete="jurisdiction"
            />
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="status_limitaion"
              label="status_limitaion"
              type="text"
              value="status_limitaion"
              onChange={(e) => onChange(e)}
              id="status_limitaion"
              autoComplete="status_limitaion"
            />
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="opposing_counsel"
              label="opposing_counsel"
              type="text"
              value="opposing_counsel"
              onChange={(e) => onChange(e)}
              id="opposing_counsel"
              autoComplete="opposing_counsel"
            />
          </Grid>
          <Grid item xs={4}>
            <Typography component="h5" variant="h6" sx={{ fontSize: "1rem" }}>
              Event Detail
            </Typography>
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="where"
              label="where"
              type="text"
              value="where"
              onChange={(e) => onChange(e)}
              id="where"
              autoComplete="where"
            />
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="when"
              label="when"
              type="text"
              value="when"
              onChange={(e) => onChange(e)}
              id="when"
              autoComplete="when"
            />
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="involved"
              label="Who was involved"
              type="text"
              value="involved"
              onChange={(e) => onChange(e)}
              id="involved"
              autoComplete="involved"
            />
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="witnesses"
              label="witnesses"
              type="text"
              value="witnesses"
              onChange={(e) => onChange(e)}
              id="witnesses"
              autoComplete="witnesses"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              id="outlined-multiline-static"
              label="Customer Narrative of the event"
              multiline
              rows={10}
              defaultValue="Default Value"
              variant="outlined"
              value="narrative"
              onChange={(e) => onChange(e)}
              id="narrative"
              autoComplete="narrative"
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{ float: "right" }}
          endIcon={<SaveIcon />}
        >
          Send
        </Button>
      </Box>
    </Fragment>
  );
};

export default NewMatter;
