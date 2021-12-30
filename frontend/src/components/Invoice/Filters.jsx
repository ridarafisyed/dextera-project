/** @format */

import React, { Fragment } from "react";
import {
  Box,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  FormControlLabel,
} from "@mui/material";
import {
  LinkButton,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../styles/styles";
import SearchIcon from "@mui/icons-material/Search";

import { styled } from "@mui/material/styles";

import { useToggle } from "../../context/useToggle";

const Filters = () => {
  const [paid, setPaid] = useToggle(false);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Fragment>
      <Box
        p={3}
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
      >
        <LinkButton to="/create-invoice">Create Invoice</LinkButton>
        <LinkButton to="/recive-invoice">Receive Money</LinkButton>
        <FormControlLabel
          label=" Paid/ Unpaid"
          control={<Switch checked={paid} onChange={() => setPaid(paid)} />}
        />
        <Box mt={2}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
        <FormControl sx={{ width: "8rem", m: 2 }}>
          <InputLabel id="demo-simple-select-label">All Invoice</InputLabel>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "8rem", m: 2 }}>
          <InputLabel id="demo-simple-select-label">Bill Date</InputLabel>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "8rem", m: 2 }}>
          <InputLabel id="demo-simple-select-label">All Times</InputLabel>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Typography component="span" variant="h8" sx={{ width: "8rem", m: 2 }}>
          Status:
        </Typography>

        <FormControl sx={{ width: "8rem", m: 2 }}>
          <InputLabel id="demo-simple-select-label">Any </InputLabel>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "8rem", m: 2 }}>
          <InputLabel id="demo-simple-select-label">Dropd-own</InputLabel>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Fragment>
  );
};

export default Filters;
