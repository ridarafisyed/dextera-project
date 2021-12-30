/** @format */

import React, { Fragment, useState } from "react";
import { TextField, Box, Grid, Button, Typography } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import SaveIcon from "@mui/icons-material/Save";
import { LocalizationProvider, TimePicker, DatePicker } from "@mui/lab";
import { ActionAlerts, GetTime, GetDate } from "../../utils/ActionAlerts";
import axios from "axios";
import { CONFIG } from "../../api/MatterApi";

const Contact = () => {
  const [contactData, setContactData] = useState({
    // company info
    company_name: "",
    webiste: "",
    ger_email: "",
    billing_email: "",
    // address
    street: "",
    suite: "",
    city: "",
    state: "",
    zip: 0,
    plus_4: 0,
    note: "",

    client_no: 0,
    f_name: "",
    l_name: "",
    dob: "",
    ssn: 0,
    mobile_no: 0,
    home_no: 0,
    office_no: 0,
    fax_no: 0,
    other_no: 0,
    email_1: "",
    email_2: "",
    email_3: "",
    // other address
    street2: "",
    suite2: "",
    city2: "",
    state2: "",
    zip2: 0,
    plus_42: 0,

    office: "",
    team: "",
    member: "",
    assign_to: "",
    contact: "",
    relation: "",
  });
  const [pickDate, setPickDate] = useState(new Date("2021-12-01T21:00:00"));

  const {
    company_name,
    webiste,
    ger_email,
    billing_email,
    street,
    suite,
    city,
    state,
    zip,
    plus_4,
    client_no,
    f_name,
    l_name,
    dob,
    ssn,
    mobile_no,
    home_no,
    office_no,
    fax_no,
    other_no,
    email_1,
    email_2,
    email_3,
    street2,
    suite2,
    city2,
    state2,
    zip2,
    plus_42,
    office,
    team,
    member,
    assign_to,
    contact,
    relation,
  } = contactData;
  const onChange = (e) =>
    setContactData({ ...contactData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    let date = GetDate(pickDate);

    const body = JSON.stringify({
      company_name,
      webiste,
      ger_email,
      billing_email,
      street,
      suite,
      city,
      state,
      zip,
      plus_4,
      client_no,
      f_name,
      l_name,
      dob,
      ssn,
      mobile_no,
      home_no,
      office_no,
      fax_no,
      other_no,
      email_1,
      email_2,
      email_3,
      street2,
      suite2,
      city2,
      state2,
      zip2,
      plus_42,
      office,
      team,
      member,
      assign_to,
      contact,
      relation,
    });
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/contact/`, body, CONFIG)
      .then((res) => {
        <ActionAlerts value={{ status: res.statusText, message: "Success" }} />;
      })
      .catch((err) => {
        <ActionAlerts value={{ status: err.statusText, message: "Failed" }} />;
      });
    console.log(body);
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
        <Grid container p={2}>
          <Grid item xs={6}>
            <Typography component="h4" variant="h5">
              Company information
            </Typography>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="company_name"
              label="company_name"
              type="text"
              onChange={(e) => onChange(e)}
              id="company_name"
              autoComplete="company_name"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="client_no"
              label="client_no"
              type="number"
              onChange={(e) => onChange(e)}
              id="client_no"
              autoComplete="client_no"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="f_name"
              label="f_name"
              type="text"
              onChange={(e) => onChange(e)}
              id="f_name"
              autoComplete="f_name"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="l_name"
              label="l_name"
              type="text"
              onChange={(e) => onChange(e)}
              id="l_name"
              autoComplete="l_name"
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                inputFormat="yyyy-MM-dd"
                mask="____-__-__"
                label="Pick Date"
                value={pickDate}
                name="pickdate"
                id="pickdate"
                onChange={(e) => setPickDate(e)}
                renderInput={(params) => <TextField size="small" {...params} />}
              />
            </LocalizationProvider>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="ssn"
              label="ssn"
              type="text"
              onChange={(e) => onChange(e)}
              id="ssn"
              autoComplete="ssn"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="mobile_no"
              label="mobile_no"
              type="number"
              onChange={(e) => onChange(e)}
              id="mobile_no"
              autoComplete="mobile_no"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="home_no"
              label="home_no"
              type="number"
              onChange={(e) => onChange(e)}
              id="home_no"
              autoComplete="home_no"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="office_no"
              label="office_no"
              type="number"
              onChange={(e) => onChange(e)}
              id="office_no"
              autoComplete="office_no"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="fax_no"
              label="fax_no"
              type="number"
              onChange={(e) => onChange(e)}
              id="fax_no"
              autoComplete="fax_no"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="other_no"
              label="other_no"
              type="number"
              onChange={(e) => onChange(e)}
              id="other_no"
              autoComplete="other_no"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="email_1"
              label="email_1"
              type="email"
              onChange={(e) => onChange(e)}
              id="email_1"
              autoComplete="email_1"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="email_2"
              label="email_2"
              type="email"
              onChange={(e) => onChange(e)}
              id="email_2"
              autoComplete="email_2"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="email_3"
              label="email_3"
              type="email"
              onChange={(e) => onChange(e)}
              id="email_3"
              autoComplete="email_3"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="street"
              label="street"
              type="text"
              onChange={(e) => onChange(e)}
              id="street"
              autoComplete="street"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="suite"
              label="suite"
              type="text"
              onChange={(e) => onChange(e)}
              id="suite"
              autoComplete="suite"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="city"
              label="city"
              type="text"
              onChange={(e) => onChange(e)}
              id="city"
              autoComplete="city"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="state"
              label="state"
              type="text"
              onChange={(e) => onChange(e)}
              id="state"
              autoComplete="state"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="zip"
              label="zip"
              type="number"
              onChange={(e) => onChange(e)}
              id="zip"
              autoComplete="zip"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="plus_4"
              label="plus_4"
              type="number"
              onChange={(e) => onChange(e)}
              id="plus_4"
              autoComplete="plus_4"
            />
            <TextField
              fullWidth
              size="small"
              multiline
              rows={5}
              margin="normal"
              variant="outlined"
              name="note"
              label="note"
              type="text"
              onChange={(e) => onChange(e)}
              id="note"
              autoComplete="note"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography component="h4" variant="h6">
              Alternate Information
            </Typography>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="webiste"
              label="webiste"
              type="text"
              onChange={(e) => onChange(e)}
              id="webiste"
              autoComplete="webiste"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="ger_email"
              label="ger_email"
              type="text"
              onChange={(e) => onChange(e)}
              id="ger_email"
              autoComplete="ger_email"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="billing_email"
              label="billing_email"
              type="text"
              onChange={(e) => onChange(e)}
              id="billing_email"
              autoComplete="billing_email"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="street"
              label="street"
              type="text"
              onChange={(e) => onChange(e)}
              id="street"
              autoComplete="street"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="suite"
              label="suite"
              type="text"
              onChange={(e) => onChange(e)}
              id="suite"
              autoComplete="suite"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="city"
              label="city"
              type="text"
              onChange={(e) => onChange(e)}
              id="city"
              autoComplete="city"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="state"
              label="state"
              type="text"
              onChange={(e) => onChange(e)}
              id="state"
              autoComplete="state"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="zip"
              label="zip"
              type="number"
              onChange={(e) => onChange(e)}
              id="zip"
              autoComplete="zip"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="plus_4"
              label="plus_4"
              type="number"
              onChange={(e) => onChange(e)}
              id="plus_4"
              autoComplete="plus_4"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={4}>
                <Typography component="h4" variant="h6">
                  Source
                </Typography>
                <TextField
                  size="small"
                  margin="normal"
                  variant="outlined"
                  name="office"
                  label="office"
                  type="text"
                  onChange={(e) => onChange(e)}
                  id="office"
                  autoComplete="office"
                />
                <TextField
                  size="small"
                  margin="normal"
                  variant="outlined"
                  name="team"
                  label="team"
                  type="text"
                  onChange={(e) => onChange(e)}
                  id="team"
                  autoComplete="team"
                />
                <TextField
                  size="small"
                  margin="normal"
                  variant="outlined"
                  name="member"
                  label="member"
                  type="text"
                  onChange={(e) => onChange(e)}
                  id="member"
                  autoComplete="member"
                />
              </Grid>
              <Grid item xs={4}>
                <Typography component="h4" variant="h6">
                  Assigned To
                </Typography>
                <TextField
                  size="small"
                  margin="normal"
                  variant="outlined"
                  name="assign_to"
                  label="assign_to"
                  type="text"
                  onChange={(e) => onChange(e)}
                  id="assign_to"
                  autoComplete="assign_to"
                />
              </Grid>
              <Grid item xs={4}>
                <Typography component="h4" variant="h6">
                  Linked Contacts
                </Typography>
                <TextField
                  size="small"
                  margin="normal"
                  variant="outlined"
                  name="contact"
                  label="contact"
                  type="text"
                  onChange={(e) => onChange(e)}
                  id="contact"
                  autoComplete="contact"
                />
                <TextField
                  size="small"
                  margin="normal"
                  variant="outlined"
                  name="relation"
                  label="relation"
                  type="text"
                  onChange={(e) => onChange(e)}
                  id="relation"
                  autoComplete="relation"
                />
              </Grid>
            </Grid>
            <Box sx={{ float: "right" }}>
              <Button variant="contained" type="submit" endIcon={<SaveIcon />}>
                Save
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Contact;
