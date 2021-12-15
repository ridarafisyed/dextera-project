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
} from "@mui/material";
import { useToggle } from "../../context/useToggle";

const CreateUser = () => {
  const [approvel, setApprovel] = useToggle(false);
  const [userData, setUserData] = useState({
    f_name: "",
    m_name: "",
    l_name: "",
    c_email: "",
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

  // const {
  //   f_name
  // m_name,
  // l_name,
  // c_email,
  // rate,
  // role,
  // time_zone,
  // group,
  // job_title,
  // bar_no,
  // street,
  // suite,
  // city,
  // state,
  // zip,
  // ext,
  // mobile,
  // home,
  // work_no,
  // p_email,
  // phone_ext,
  // } = userData;
  const onChange = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <Box
        component="form"
        Validate
        sx={{
          "& .MuiTextField-root": { m: 1, width: "15rem" },
        }}
        onSubmit={(e) => onSubmit(e)}
      >
        <Typography component="h3" variant="h4">
          Create User
        </Typography>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12}>
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
              name="m_name"
              label="m_name"
              type="text"
              onChange={(e) => onChange(e)}
              id="m_name"
              autoComplete="m_name"
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
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="c_email"
              label="c_email"
              type="text"
              onChange={(e) => onChange(e)}
              id="c_email"
              autoComplete="c_email"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="rate"
              label="rate"
              type="text"
              onChange={(e) => onChange(e)}
              id="rate"
              autoComplete="rate"
            />
            <FormControlLabel
              label="Round Entries (Round [up/down] to nearnest 0.00 fraction of the hour"
              control={
                <Switch
                  checked={approvel}
                  onChange={() => setApprovel(approvel)}
                />
              }
              sx={{ width: "35rem" }}
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="role"
              label="role"
              type="text"
              onChange={(e) => onChange(e)}
              id="role"
              autoComplete="role"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="time_zone"
              label="time_zone"
              type="text"
              onChange={(e) => onChange(e)}
              id="time_zone"
              autoComplete="time_zone"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="group"
              label="group"
              type="text"
              onChange={(e) => onChange(e)}
              id="group"
              autoComplete="group"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="job_title"
              label="job_title"
              type="text"
              onChange={(e) => onChange(e)}
              id="job_title"
              autoComplete="job_title"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="bar_no"
              label="bar_no"
              type="text"
              onChange={(e) => onChange(e)}
              id="bar_no"
              autoComplete="bar_no"
            />
          </Grid>
          <Grid item mt={2}>
            <Divider textAlign="left">
              <Typography component="h3" variant="h5">
                Contact Info
              </Typography>
            </Divider>
            <Box>
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
                type="text"
                onChange={(e) => onChange(e)}
                id="zip"
                autoComplete="zip"
              />
              <TextField
                size="small"
                margin="normal"
                variant="outlined"
                name="ext"
                label="ext"
                type="text"
                onChange={(e) => onChange(e)}
                id="ext"
                autoComplete="ext"
              />
              <TextField
                size="small"
                margin="normal"
                variant="outlined"
                name="mobile"
                label="mobile"
                type="text"
                onChange={(e) => onChange(e)}
                id="mobile"
                autoComplete="mobile"
              />
              <Button variant="contained">Reset Password</Button>
              <TextField
                size="small"
                margin="normal"
                variant="outlined"
                name="home"
                label="home"
                type="text"
                onChange={(e) => onChange(e)}
                id="home"
                autoComplete="home"
              />
              <TextField
                size="small"
                margin="normal"
                variant="outlined"
                name="work_no"
                label="work_no"
                type="text"
                onChange={(e) => onChange(e)}
                id="work_no"
                autoComplete="work_no"
              />
              <TextField
                size="small"
                margin="normal"
                variant="outlined"
                name="p_email"
                label="p_email"
                type="text"
                onChange={(e) => onChange(e)}
                id="p_email"
                autoComplete="p_email"
              />
              <TextField
                size="small"
                margin="normal"
                variant="outlined"
                name="phone_ext"
                label="phone_ext"
                type="text"
                onChange={(e) => onChange(e)}
                id="phone_ext"
                autoComplete="phone_ext"
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                "& .MuiButton-root": { m: 1 },
              }}
            >
              <Button variant="contained" sx={{ background: "#5cb85c" }}>
                Activate
              </Button>
              <Button variant="contained" sx={{ background: "#f0ad4e" }}>
                Deactivate
              </Button>
              <Button variant="contained" sx={{ background: "#d9534f" }}>
                Delete
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default CreateUser;
