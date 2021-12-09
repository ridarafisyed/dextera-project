/** @format */

// import * as React from 'react';
import { styled } from "@mui/styles";
import { Link } from "react-router-dom";
import { Button, InputBase } from "@mui/material";

// export const Login_btn = styled(Button)({
//     background: 'primary ',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   });

export const SideBarBtn = styled(Button)({
  fontSize: "0.6em",
  textTransform: "none",
  textAlign: "center",
  width: "8em",
  height: "8em",
  margin: "0.7em",
  borderColor: "#eee",
  padding: "1em",
  "&:hover": {
    backgroundColor: "white",
  },
});

export const SecNavbar = styled("nav")({
  boxShadow: "none",
  backgroundColor: "#1c54b2",
  color: "#eee",
  position: "reletive",
  padding: "0",
  margin: "0",
  height: "3.5rem",
  width: "100%",
});

export const LinkButton = styled(Link)({
  textAlign: "center",
  textTransform: "uppercase",
  textDecoration: "none",
  margin: "0.7em",
  backgroundColor: "#2979ff",
  borderColor: "#2979ff",
  color: "white",
  padding: "0.65rem 1.2rem",
  borderRadius: "0.5rem",
  "&:hover": {
    backgroundColor: "#1c54b2",
    cursor: "pointer",
    color: "white",
  },
});

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "1.5rem",
  backgroundColor: "#eee",
  "&:hover": {
    backgroundColor: "#ddd",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "40%",
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
