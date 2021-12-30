/** @format */

import React, { Fragment, useState } from "react";
import {
  TextField,
  Box,
  Grid,
  Switch,
  Button,
  Typography,
  RadioGroup,
  FormLabel,
  FormControl,
  FormControlLabel,
  Radio,
} from "@mui/material";
import axios from "axios";
import { CONFIG } from "../../api/MatterApi";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import SaveIcon from "@mui/icons-material/Save";
import { LocalizationProvider, TimePicker, DatePicker } from "@mui/lab";
import { useToggle } from "../../context/useToggle";
import { ActionAlerts, GetTime, GetDate } from "../../utils/ActionAlerts";

const Time = () => {
  const [pickTime, setPickTime] = useState(new Date("2021-12-01T21:00:00"));
  const [pickDate, setPickDate] = useState(new Date("2021-12-01T21:11:54"));
  const [timeToggle, setTimeToggle] = useToggle(false);
  const [billable, setBillable] = useToggle(false);

  // const [bill, setBill] = useToggle(false);
  const [timeData, setTimeData] = useState({
    contact: 0,
    matter_name: 0,
    category: "",
    sub_category: "",
    hard: false,
    soft: false,
    unit: 0,
    qty: 0,
    rate: 0,
    file: "",
    detail: "",
    bill_by: 0,
    note: "",
  });

  const {
    contact,
    matter_name,
    category,
    sub_category,
    hard,
    soft,
    unit,
    qty,
    rate,
    file,
    detail,
    bill_by,

    note,
  } = timeData;
  const onChange = (e) =>
    setTimeData({ ...timeData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    let time = GetTime(pickTime);
    let date = GetDate(pickDate);

    const body = JSON.stringify({
      contact,
      matter_name,
      category,
      sub_category,
      hard,
      soft,
      unit,
      qty,
      rate,
      time,
      date,
      detail,
      bill_by,
      billable,
      note,
    });
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/add-time/`, body, CONFIG)
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
          "& .MuiTextField-root": { m: 1, width: "15rem" },
        }}
        onSubmit={(e) => onSubmit(e)}
      >
        <Typography component="h3" variant="h4">
          Time
        </Typography>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12}>
            <Grid container p={3}>
              <Grid item xs={6}>
                <FormControlLabel
                  size="large"
                  label="Time"
                  labelPlacement="start"
                  control={
                    <Switch
                      size="large"
                      checked={timeToggle}
                      onChange={(e) => setTimeToggle(e)}
                    />
                  }
                />
                {timeToggle ? null : (
                  <Box>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Expense</FormLabel>
                      <RadioGroup
                        row
                        aria-label="expense"
                        defaultValue=""
                        name="expense"
                        id="expense"
                      >
                        <FormControlLabel
                          value="hard"
                          control={<Radio />}
                          label="Hard"
                        />
                        <FormControlLabel
                          value="soft"
                          control={<Radio />}
                          label="Soft"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                )}
              </Grid>
              <Grid item xs={6}>
                <TextField
                  size="small"
                  margin="normal"
                  variant="outlined"
                  name="matter"
                  label="matter"
                  type="number"
                  onChange={(e) => onChange(e)}
                  id="matter"
                  autoComplete="matter"
                  disabled
                />
                <TextField
                  size="small"
                  margin="normal"
                  variant="outlined"
                  name="contact"
                  label="contact"
                  type="number"
                  onChange={(e) => onChange(e)}
                  id="contact"
                  autoComplete="contact"
                  disabled
                />
              </Grid>
            </Grid>

            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="category"
              label="category"
              type="text"
              onChange={(e) => onChange(e)}
              id="category"
              autoComplete="category"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="sub_category"
              label="sub_category"
              type="text"
              onChange={(e) => onChange(e)}
              id="sub_category"
              autoComplete="sub_category"
            />
            {timeToggle ? (
              <TextField
                size="small"
                margin="normal"
                variant="outlined"
                name="rate"
                label="rate"
                type="number"
                onChange={(e) => onChange(e)}
                id="rate"
                autoComplete="rate"
              />
            ) : (
              <Fragment>
                <TextField
                  size="small"
                  margin="normal"
                  variant="outlined"
                  name="unit"
                  label="unit"
                  type="number"
                  onChange={(e) => onChange(e)}
                  id="unit"
                  autoComplete="unit"
                />
                <TextField
                  size="small"
                  margin="normal"
                  variant="outlined"
                  name="qty"
                  label="Qty"
                  type="number"
                  onChange={(e) => onChange(e)}
                  id="qty"
                  autoComplete="qty"
                />
                <Box m={1}>
                  <Typography component="lable"> Receipt(s) </Typography>

                  <Button variant="contained" disabled>
                    + Attach File
                  </Button>
                </Box>
              </Fragment>
            )}

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                label="Pick Time"
                name="picktime"
                id="picktime"
                value={pickTime}
                onChange={(e) => {
                  setPickTime(e);
                }}
                renderInput={(params) => <TextField size="small" {...params} />}
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
                renderInput={(params) => <TextField size="small" {...params} />}
              />
            </LocalizationProvider>

            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="detail"
              label="detail"
              type="text"
              onChange={(e) => onChange(e)}
              id="detail"
              autoComplete="detail"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="bill_by"
              label="bill_by"
              type="number"
              onChange={(e) => onChange(e)}
              id="bill_by"
              autoComplete="bill_by"
            />
            <FormControlLabel
              size="large"
              label="Billable"
              labelPlacement="start"
              control={
                <Switch
                  size="large"
                  checked={billable}
                  onChange={() => setBillable(billable)}
                />
              }
            />
            <br />
            <TextField
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              name="note"
              rows={4}
              label="note"
              type="text"
              onChange={(e) => onChange(e)}
              id="note"
              autoComplete="note"
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          type="submit"
          sx={{ float: "right" }}
          endIcon={<SaveIcon />}
        >
          Save
        </Button>
      </Box>
    </Fragment>
  );
};

export default Time;
