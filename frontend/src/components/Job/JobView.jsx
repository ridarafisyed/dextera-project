/** @format */

import React, { Fragment, useState } from "react";

import {
  TextField,
  Box,
  Grid,
  Switch,
  Button,
  Typography,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

import { LocalizationProvider, TimePicker, DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import { LinkButton } from "../../styles/styles";

const JobView = () => {
  const [pickTime, setPickTime] = useState(new Date("2021-12-01T21:00:00"));
  const [pickDate, setPickDate] = useState(new Date("2021-12-01T21:11:54"));
  const [jobData, setJobData] = useState({
    name: "",
    state: "",
    city: "",
    email: "",
    mobile: 0,
    home: "",
    law_school: "",
    grad_year: 0,
    bar_adm_year: 0,
    practice_area: "",
    mail_add: "",
    relocate: false,
    date: "",
    time: "",
    link: "",
    notes: "",
    file: "",
  });

  const {
    name,
    state,
    city,
    email,
    mobile,
    home,
    law_school,
    grad_year,
    bar_adm_year,
    practice_area,
    mail_add,
    relocate,
    date,
    time,
    link,
    notes,
    file,
  } = jobData;

  const onChange = (e) =>
    setJobData({ ...jobData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
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
          Job View
        </Typography>
        <Box p={3}>
          <LinkButton to="/jb-search" sx={{ float: "right" }}>
            Job search
          </LinkButton>
          <LinkButton to="/job-view" sx={{ float: "right" }}>
            Job Result
          </LinkButton>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                control={<Checkbox />}
                label="Save"
                labelPlacement="start"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Contacted"
                labelPlacement="start"
              />
              <Typography component="label" m={1}>
                Interested :
              </Typography>
              <FormControlLabel
                control={<Checkbox />}
                label="Yes"
                labelPlacement="start"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="No"
                labelPlacement="start"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Interviewed"
                labelPlacement="start"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Accept"
                labelPlacement="start"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Reject"
                labelPlacement="start"
              />
              <Box ml={3}>
                <Typography component="h4" variant="h5">
                  Overall Score: 74%
                </Typography>
              </Box>
            </FormGroup>
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              name="name"
              label="name"
              type="text"
              value={name}
              onChange={(e) => onChange(e)}
              id="name"
            />
            <TextField
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              name="city"
              label="city"
              type="text"
              value={city}
              onChange={(e) => onChange(e)}
              id="city"
            />
            <TextField
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              name="state"
              label="state"
              type="text"
              value={state}
              onChange={(e) => onChange(e)}
              id="state"
            />
            <TextField
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              name="email"
              label="email"
              type="email"
              value={email}
              onChange={(e) => onChange(e)}
              id="email"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              name="mobile"
              label="mobile"
              type="phone"
              value={mobile}
              onChange={(e) => onChange(e)}
              id="mobile"
            />
            <TextField
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              name="home"
              label="home"
              type="phone"
              value={home}
              onChange={(e) => onChange(e)}
              id="home"
            />
            <TextField
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              name="law_school"
              label="law_school"
              type="text"
              value={law_school}
              onChange={(e) => onChange(e)}
              id="law_school"
            />

            <TextField
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              name="grad_year"
              label="grad_year"
              type="number"
              value={grad_year}
              onChange={(e) => onChange(e)}
              id="grad_year"
              autoComplete="grad_year"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="bar_adm_year"
              label="bar_adm_year"
              type="number"
              value={bar_adm_year}
              onChange={(e) => onChange(e)}
              id="bar_adm_year"
            />
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="mail_add"
              label="mail_add"
              type="text"
              value={mail_add}
              onChange={(e) => onChange(e)}
              id="mail_add"
            />
            <FormControlLabel
              control={
                <Switch
                  name="relocate"
                  value={relocate}
                  onChange={(e) => onChange(e)}
                />
              }
              label="Relocate"
              labelPlacement="start"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Box m={1}>
                  <Typography component="lable"> Writing Sample </Typography>

                  <Button variant="contained" disabled>
                    + Attach File
                  </Button>
                </Box>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    label="Pick Time"
                    name="picktime"
                    id="picktime"
                    value={pickTime}
                    onChange={(e) => {
                      setPickTime(e);
                    }}
                    renderInput={(params) => (
                      <TextField size="small" fullWidth {...params} />
                    )}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    inputFormat="yyyy-MM-dd"
                    mask="____-__-__"
                    label="Pick Date"
                    value={pickDate}
                    name="pickdate"
                    id="pickdate"
                    onChange={(e) => setPickDate(e)}
                    renderInput={(params) => (
                      <TextField size="small" fullWidth {...params} />
                    )}
                  />
                </LocalizationProvider>

                <TextField
                  size="small"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  name="link"
                  type="link"
                  defaultValue="2021-12-01"
                  value={link}
                  onChange={(e) => onChange(e)}
                  id="link"
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  multiline
                  rows={8}
                  size="small"
                  margin="normal"
                  variant="outlined"
                  name="notes"
                  type="text"
                  value="Notes ..."
                  id="notes"
                />
              </Grid>
            </Grid>
            {/* <Button
              variant="contained"
              type="submit"
              sx={{ float: "right" }}
              endIcon={<SaveIcon />}
            >
              Apply
            </Button> */}
            <Box m={3} sx={{ float: "right" }}>
              <LinkButton to="/job-result">Apply</LinkButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default JobView;
