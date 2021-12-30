/** @format */

import React, { Fragment } from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Link,
} from "@mui/material";
import { FooterBar, FooterLink } from "../../styles/styles";

const Footer = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Fragment>
      <Box>
        <FooterBar>
          <FooterLink to={"/dashboard"}>Accounting</FooterLink> |
          <FooterLink to={"/dashboard"}> Calendar</FooterLink> |
          <FooterLink to={"/dashboard"}>Contacts</FooterLink> |
          <FooterLink to={"/dashboard"}>Favorites</FooterLink> |
          <FooterLink to={"/dashboard"}>Matters</FooterLink> |
          <FooterLink to={"/dashboard"}>Tasks</FooterLink> |
          <FooterLink to={"/dashboard"}>Workflow</FooterLink>
        </FooterBar>
      </Box>
    </Fragment>
  );
};

export default Footer;
