/** @format */

import React, { Fragment, useState } from "react";
import axios from "axios";
import {
  TextField,
  Box,
  Grid,
  Switch,
  Typography,
  FormControlLabel,
} from "@mui/material";
// import SaveIcon from "@mui/icons-material/Save";

// import { LocalizationProvider, DateRangePicker, DatePicker } from "@mui/lab";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";

// import { CreateMatter, CONFIG } from "../../api/MatterApi";

// import { ActionAlerts, TotalDays, GetDate } from "../../utils/ActionAlerts";
import { LinkButton } from "../../styles/styles";

const Search = () => {
  const [searchData, setSearchData] = useState({
    state: "",
    city: "",
    practice_area: "",
    law_school: "",
    grad_year: 0,
    bar_adm_year: 0,
    longest_tenure: 0,
    average_tenure: 0,
    current_tenure: 0,
    undergrad_study: "",
    lamguages: "",
    admitted_state: "",
    relocate: false,
  });

  const {
    state,
    city,
    practice_area,
    law_school,
    grad_year,
    bar_adm_year,
    longest_tenure,
    average_tenure,
    current_tenure,
    undergrad_study,
    lamguages,
    admitted_state,
    relocate,
  } = searchData;

  const onChange = (e) =>
    setSearchData({ ...searchData, [e.target.name]: e.target.value });

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
          Job Search
        </Typography>
        <Box m={2}>
          <LinkButton to="/job-result" sx={{ float: "right" }}>
            Search Result
          </LinkButton>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              name="state"
              label="state"
              type="number"
              min="0"
              value={state}
              onChange={(e) => onChange(e)}
              id="state"
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
              name="longest_tenure"
              label="longest_tenure"
              type="number"
              value={longest_tenure}
              onChange={(e) => onChange(e)}
              id="longest_tenure"
            />
            <TextField
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              name="average_tenure"
              label="average_tenure"
              type="number"
              value={average_tenure}
              onChange={(e) => onChange(e)}
              id="average_tenure"
              autoComplete="average_tenure"
            />
            <TextField
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              name="current_tenure"
              label="current_tenure"
              type="text"
              value={current_tenure}
              onChange={(e) => onChange(e)}
              id="current_tenure"
            />
            <TextField
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              name="admitted_state"
              label="admitted_state"
              type="text"
              value={admitted_state}
              onChange={(e) => onChange(e)}
              id="admitted_state"
            />
          </Grid>
          <Grid item xs={4}>
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
              name="grad_year"
              label="grad_year"
              type="number"
              value={grad_year}
              onChange={(e) => onChange(e)}
              id="grad_year"
            />

            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="undergrad_study"
              label="undergrad_study"
              step="0.01"
              type="text"
              value={undergrad_study}
              onChange={(e) => onChange(e)}
              id="undergrad_study"
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
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="practice_area"
              label="practice_area"
              type="text"
              value={practice_area}
              onChange={(e) => onChange(e)}
              id="practice_area"
              disabled
            />
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
              disabled
            />

            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="lamguages"
              label="lamguages"
              type="text"
              value={lamguages}
              onChange={(e) => onChange(e)}
              id="lamguages"
            />
            {/* <Button
              variant="contained"
              type="submit"
              sx={{ float: "right" }}
              endIcon={<SaveIcon />}
            >
              Apply
            </Button> */}
            <Box m={3}>
              <LinkButton to="/job-result" sx={{ float: "right" }}>
                Apply
              </LinkButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Search;
