/** @format */

import React, { Fragment, useState } from "react";
import {
  TextField,
  Box,
  Grid,
  Switch,
  Button,
  Typography,
  Divider,
  FormControlLabel,
  Stack,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";
import axios from "axios";
import { LinkButton } from "../../styles/styles";

import ClearIcon from "@mui/icons-material/Clear";
import { ActionAlerts } from "../../utils/ActionAlerts";
import { useToggle } from "../../context/useToggle";
import { CONFIG } from "../../api/MatterApi";
import { padding } from "@mui/system";

const CreateUser = () => {
  const [rateType, setRateType] = useState("");

  const handleChange = (event) => {
    setRateType(event.target.value);
  };

  const [approvel, setApprovel] = useToggle(false);
  const [userData, setUserData] = useState({
    f_name: "",
    m_name: "",
    l_name: "",
    c_email: "",
    rate_type: "",
    rate: 0.0,
    role: "",
    time_zone: "",
    group: "",
    job_title: "",
    bar_no: 0,
    street: "",
    suite: "",
    city: "",
    state: "",
    zip: 0,
    ext: 0,
    mobile: 0,
    home: 0,
    work_no: 0,
    p_email: "",
    phone_ext: 0,
  });

  const {
    f_name,
    m_name,
    l_name,
    c_email,
    rate,
    role,
    time_zone,
    group,
    job_title,
    bar_no,
    street,
    suite,
    city,
    state,
    zip,
    ext,
    mobile,
    home,
    work_no,
    p_email,
    phone_ext,
  } = userData;
  const onChange = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const body = JSON.stringify({
      f_name,
      m_name,
      l_name,
      c_email,
      rate,
      role,
      time_zone,
      group,
      job_title,
      bar_no,
      street,
      suite,
      city,
      state,
      zip,
      ext,
      mobile,
      home,
      work_no,
      p_email,
      phone_ext,
    });
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/create-member/`, body, CONFIG)
      .then((res) => {
        return (
          <ActionAlerts
            value={{ status: res.statusText, message: "Success" }}
          />
        );
      })
      .catch((err) => {
        return (
          <ActionAlerts
            value={{ status: err.statusText, message: "Success" }}
          />
        );
      });
  };
  return (
    <Fragment>
      {/* <Box p={3} sx={{ float: "right" }}>
        <LinkButton to="/users">Manage User</LinkButton>
        <LinkButton to="/user-group">Manage Group</LinkButton>
        <LinkButton to="/user-role">Manage Role</LinkButton>
      </Box> */}

      <Box component="form" Validate onSubmit={(e) => onSubmit(e)}>
        <Typography component="h3" variant="h4">
          Create User
        </Typography>
        <Grid
          container
          spacing={2}
          mt={2}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "14rem" },
          }}
        >
          <Grid item lg={3}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="f_name"
              label="First Name"
              type="text"
              onChange={(e) => onChange(e)}
              id="f_name"
              autoComplete="f_name"
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="m_name"
              label="Middle Name"
              type="text"
              onChange={(e) => onChange(e)}
              id="m_name"
              autoComplete="m_name"
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="l_name"
              label="Last Name"
              type="text"
              onChange={(e) => onChange(e)}
              id="l_name"
              autoComplete="l_name"
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="c_email"
              label="Company Email"
              type="text"
              onChange={(e) => onChange(e)}
              id="c_email"
              autoComplete="c_email"
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="rate"
              label="Rate $"
              type="number"
              onChange={(e) => onChange(e)}
              id="rate"
              autoComplete="rate"
            />
          </Grid>
          <Grid item lg={6}>
            <Stack direction="row" spacing={2} ml={2}>
              <FormControlLabel
                sx={{ fontSize: "2rem" }}
                label=""
                control={
                  <Switch
                    checked={approvel}
                    onChange={() => setApprovel(approvel)}
                  />
                }
              />
              <Typography>
                Round Entries (Round [up/down] to nearnest
                <TextField
                  margin="dense"
                  variant="standard"
                  type="text"
                  size="small"
                  placeholder="0.00"
                  sx={{
                    maxWidth: "5rem",
                  }}
                />
                fraction of the hour
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="role"
              label="Role"
              type="text"
              onChange={(e) => onChange(e)}
              id="role"
              autoComplete="role"
            />
          </Grid>

          <Grid item lg={3}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="time_zone"
              label="Time Zone"
              type="text"
              onChange={(e) => onChange(e)}
              id="time_zone"
              autoComplete="time_zone"
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="group"
              label="Group"
              type="text"
              onChange={(e) => onChange(e)}
              id="group"
              autoComplete="group"
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="job_title"
              label="Job Title"
              type="text"
              onChange={(e) => onChange(e)}
              id="job_title"
              autoComplete="job_title"
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="bar_no"
              label="Bar #"
              type="text"
              onChange={(e) => onChange(e)}
              id="bar_no"
              autoComplete="bar_no"
            />
          </Grid>
        </Grid>
        <Box mt={4} mb={2}>
          <Divider />
          <Typography mt={2} component="h3" color="primary" variant="h5">
            Contact Info
          </Typography>
        </Box>

        <Grid
          container
          spacing={2}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "14rem" },
          }}
        >
          <Grid item lg={3}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="street"
              label="Street"
              type="text"
              onChange={(e) => onChange(e)}
              id="street"
              autoComplete="street"
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="suite"
              label="Suite"
              type="text"
              onChange={(e) => onChange(e)}
              id="suite"
              autoComplete="suite"
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="city"
              label="City"
              type="text"
              onChange={(e) => onChange(e)}
              id="city"
              autoComplete="city"
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="state"
              label="State"
              type="text"
              onChange={(e) => onChange(e)}
              id="state"
              autoComplete="state"
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="zip"
              label="Zip"
              type="number"
              onChange={(e) => onChange(e)}
              id="zip"
              autoComplete="zip"
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="ext"
              label="+4"
              type="number"
              onChange={(e) => onChange(e)}
              id="ext"
              autoComplete="ext"
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="p_email"
              label="Personal Email"
              type="email"
              onChange={(e) => onChange(e)}
              id="p_email"
              autoComplete="p_email"
            />
          </Grid>
          <Grid item lg={3}>
            <Box mt={1} ml={1}>
              <Button variant="contained" color="primary">
                Reset Password
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="mobile"
              label="Mobile #"
              type="phone"
              onChange={(e) => onChange(e)}
              id="mobile"
              autoComplete="mobile"
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="home"
              label="Home #"
              type="phone"
              onChange={(e) => onChange(e)}
              id="home"
              autoComplete="home"
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="work_no"
              label="Work #"
              type="phone"
              onChange={(e) => onChange(e)}
              id="work_no"
              autoComplete="work_no"
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="phone_ext"
              label="Extesion"
              type="number"
              onChange={(e) => onChange(e)}
              id="phone_ext"
              autoComplete="phone_ext"
            />
          </Grid>
        </Grid>
        <Grid item lg={12}>
          <Box
            sx={{
              "& .MuiButton-root": { m: 1, mr: 8 },
              float: "right",
            }}
          >
            <Button
              variant="contained"
              color="success"
              type="submit"
              sx={{ color: "white" }}
            >
              Create Member
            </Button>
          </Box>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default CreateUser;
