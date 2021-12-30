/** @format */

// import * as React from 'react';
import { styled, alpha } from "@mui/material/styles";
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

export const SideBarBtn = styled(Button)(({ theme }) => ({
  fontSize: "0.6em",
  textTransform: "none",
  color: theme.palette.primary.main,
  textAlign: "center",
  width: "8em",
  height: "8em",
  margin: "0.7em",
  borderColor: "#eee",
  padding: "1em",
  "&:hover": {
    backgroundColor: "white",
    color: theme.palette.primary.main,
  },
  "&:visited": {
    color: theme.palette.primary.main,
  },
}));

export const SecNavbar = styled("nav")(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: theme.palette.primary.main,
  color: "#eee",
  position: "reletive",
  padding: "0",
  margin: "0",
  height: "3.5rem",
  width: "100%",
}));

export const FooterBar = styled("footer")(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: theme.palette.primary.main,
  color: "#eee",
  position: "reletive",
  paddingTop: "1rem",
  margin: "0",
  height: "2.5rem",
  textAlign: "center",
  alignContent: "center",
  width: "100%",
}));

export const FooterLink = styled(Link)(({ theme }) => ({
  color: "#eee",
  textTransform: "uppercase",
  textDecoration: "none",
  marginTop: "0.7rem",
  padding: " 2rem",
  "&:visited": {
    color: "#eee",
  },
}));

export const LinkButton = styled(Link)(({ theme }) => ({
  textAlign: "center",
  textTransform: "uppercase",
  textDecoration: "none",
  margin: "0.7em",
  backgroundColor: theme.palette.primary.main,
  borderColor: "#2979ff",
  color: "white",
  padding: "0.65rem 1.2rem",
  borderRadius: "0.5rem",
  "&:hover": {
    backgroundColor: "#1c54b2",
    cursor: "pointer",
    color: "white",
  },
}));

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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
export const MainSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "1.5rem",
  backgroundColor: "#eee",
  "&:hover": {
    backgroundColor: "#eee",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const MainSearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledMainInputBase = styled(InputBase)(({ theme }) => ({
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
