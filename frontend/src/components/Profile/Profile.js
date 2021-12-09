/** @format */

import React, { Fragment, useState } from "react";

import {
  Button,
  TextField,
  Checkbox,
  Grid,
  FormControlLabel,
  Tab,
  Paper,
  Box,
} from "@mui/material";
import { TabList, TabContext, TabPanel } from "@mui/lab";
import { connect } from "react-redux";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { update_profile } from "../../store/actions/profile";

const Profile = ({ profile }) => {
  const [value, setValue] = React.useState("1");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: 0,
    phone: 0,
    state: "",
    city: "",
    language: "",
    locate: false,
    search_active: false,
    law_school: "",
    grad_year: 0,
    bar_admit_date: "",
    undergrad_school: "",
    undergrad_area: "",
    undergrad_year: "",
    bar_no: "",
    admitted_practice: "",
    practice_time: "",
    longest_tenure: "",
    average_tenure: "",
    current_tenure: "",
    past_bar_companies_no: "",
    primary_area: "",
  });
  const {
    username,
    email,
    mobile,
    phone,
    state,
    city,
    language,
    locate,
    search_active,
    law_school,
    grad_year,
    bar_admit_date,
    undergrad_school,
    undergrad_area,
    undergrad_year,
    bar_no,
    admitted_practice,
    practice_time,
    longest_tenure,
    average_tenure,
    current_tenure,
    past_bar_companies_no,
    primary_area,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("sumited");

    update_profile(
      username,
      email,
      mobile,
      phone,
      state,
      city,
      language,
      locate,
      search_active,
      law_school,
      grad_year,
      bar_admit_date,
      undergrad_school,
      undergrad_area,
      undergrad_year,
      bar_no,
      admitted_practice,
      practice_time,
      longest_tenure,
      average_tenure,
      current_tenure,
      past_bar_companies_no,
      primary_area,
    );
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Box p={5}>
        <Paper elevation={5} sx={{ borderRadius: 3 }}>
          <TabContext value={value} p={8}>
            <Box component="form" onSubmit={(e) => onSubmit(e)}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="profile" value="1" />
                  <Tab label="Education" value="2" />
                  <Tab label="Work History" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Grid container spacing={2}>
                  <Grid item sx={12} xs={4}>
                    <TextField
                      margin="normal"
                      fullWidth
                      variant="outlined"
                      label="Username"
                      value={username}
                      id="username"
                      name="username"
                      type="text"
                      onChange={(e) => onChange(e)}
                      defaultValue={profile.username}
                      disabled
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Mobile #"
                      id="mobile"
                      name="mobile"
                      type="number"
                      value={mobile}
                      onChange={(e) => onChange(e)}
                      defaultValue={profile.mobile}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Phone #"
                      id="phone"
                      name="phone"
                      type="text"
                      value={phone}
                      onChange={(e) => onChange(e)}
                      defaultValue={profile.phone}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Email #"
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                      defaultValue={profile.email}
                      disabled
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="State"
                      id="state"
                      name="state"
                      type="text"
                      value={state}
                      onChange={(e) => onChange(e)}
                      defaultValue={profile.state}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="City"
                      id="city"
                      name="city"
                      type="text"
                      value={city}
                      onChange={(e) => onChange(e)}
                      defaultValue={profile.city}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Language"
                      value={language}
                      id="language"
                      name="language"
                      type="text"
                      onChange={(e) => onChange(e)}
                      defaultValue={profile.language}
                    />
                    <FormControlLabel
                      fullWidth
                      control={<Checkbox defaultChecked />}
                      label="Willing to locate"
                      labelPlacement="start"
                      id="locate"
                      name="locate"
                      value={locate}
                      onChange={(e) => onChange(e)}
                      defaultValue={profile.locate}
                    />
                    <FormControlLabel
                      fullWidth
                      control={<Checkbox defaultChecked />}
                      label="Search Type (Active/ Passiv)"
                      labelPlacement="start"
                      id="search_active"
                      name="search_active"
                      value={search_active}
                      onChange={(e) => onChange(e)}
                      defaultValue={profile.search_active}
                    />
                    <br />
                    <br />
                    <Button
                      m={5}
                      variant="contained"
                      sx={{
                        float: "right",
                      }}
                      color="success"
                      onClick={() => setValue("2")}
                      endIcon={<KeyboardArrowRightIcon />}
                    >
                      Save & Next
                    </Button>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="2">
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TextField
                      margin="normal"
                      fullWidth
                      variant="outlined"
                      label="Law School"
                      id="law_school"
                      name="law_school"
                      value={law_school}
                      onChange={(e) => onChange(e)}
                      defaultValue={profile.law_school}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Grad year"
                      id="grad_year"
                      name="grad_year"
                      value={grad_year}
                      onChange={(e) => onChange(e)}
                      defaultValue={profile.grad_year}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Bar Admittance Date"
                      id="bar_admit_date"
                      name="bar_admit_date"
                      value={bar_admit_date}
                      onChange={(e) => onChange(e)}
                      defaultValue={profile.bar_admit_date}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Undergrad school"
                      id="undergrad_school"
                      name="undergrad_school"
                      value={undergrad_school}
                      onChange={(e) => onChange(e)}
                      defaultValue={profile.undergrad_school}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Undergrade area of study"
                      id="undergrad_area"
                      name="undergrad_area"
                      value={undergrad_area}
                      onChange={(e) => onChange(e)}
                      defaultValue={profile.undergrad_area}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Undergrade year"
                      id="undergrad_year"
                      name="undergrad_year"
                      value={undergrad_year}
                      onChange={(e) => onChange(e)}
                      defaultValue={profile.undergrad_year}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Bar"
                      id="bar_no"
                      name="bar_no"
                      value={bar_no}
                      onChange={(e) => onChange(e)}
                      defaultValue={profile.bar_no}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Admitted practice (state & District)"
                      value={admitted_practice}
                      id="admitted_practice"
                      name="admitted_practice"
                      onChange={(e) => onChange(e)}
                      defaultValue={profile.admitted_practice}
                    />
                    <br />
                    <br />
                    <Button
                      variant="contained"
                      mb={5}
                      sx={{
                        float: "right",
                      }}
                      color="success"
                      onClick={() => setValue("3")}
                      endIcon={<KeyboardArrowRightIcon />}
                    >
                      Save & Next
                    </Button>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="3">
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TextField
                      margin="normal"
                      fullWidth
                      variant="outlined"
                      label="Practive Time (months / years)"
                      id="practice_time"
                      name="practice_time"
                      value={practice_time}
                      onChange={(e) => onChange(e)}
                      defaultValue={profile.practice_time}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Longest tenure (months / years)"
                      id="longest_tenure"
                      name="longest_tenure"
                      value={longest_tenure}
                      onChange={(e) => onChange(e)}
                      defaultValue={profile.longest_tenure}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Average tenure (months / years)"
                      value={average_tenure}
                      onChange={(e) => onChange(e)}
                      id="average_tenure"
                      name="average_tenure"
                      defaultValue={profile.average_tenure}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Time at Current Company (months / years)"
                      id="current_tenure"
                      name="current_tenure"
                      value={current_tenure}
                      onChange={(e) => onChange(e)}
                      defaultValue={profile.current_tenure}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="# of Companies past Bar"
                      id="past_bar_companies_no"
                      name="past_bar_companies_no"
                      value={past_bar_companies_no}
                      onChange={(e) => onChange(e)}
                      defaultValue={profile.past_bar_companies_no}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Primary areas of Law"
                      id="primary_area"
                      name="primary_area"
                      value={primary_area}
                      onChange={(e) => onChange(e)}
                      defaultValue={profile.primary_area}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        float: "right",
                        marginTop: "10rem",
                      }}
                      color="success"
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </TabPanel>
            </Box>
          </TabContext>
        </Paper>
      </Box>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  // isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  profile: state.auth.profile,
});

export default connect(mapStateToProps)(Profile);
