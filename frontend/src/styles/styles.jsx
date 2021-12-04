/** @format */

// import * as React from 'react';
import { styled } from "@mui/styles";
import { Link } from "react-router-dom";
import { Button } from "@mui/material/";

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
