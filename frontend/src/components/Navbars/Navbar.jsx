/** @format */

import React, { Fragment, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";
import NumberFormat from "react-number-format";

// styling imports
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import {
  MainSearch,
  MainSearchIconWrapper,
  StyledMainInputBase,
} from "../../styles/styles";
import SearchIcon from "@mui/icons-material/Search";

import Logo from "../../asserts/logo_white copy.png";

const Navbar = ({ logout, isAuthenticated, user }) => {
  const today = new Date();
  const time = today.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const [settingAcnchorEl, setSettingAcnchorEl] = useState(null);
  const openSetting = Boolean(settingAcnchorEl);
  const [localuser, setLocalUser] = useState({
    username: "Guest",
    is_firm: true,
    is_lawyer: false,
    is_client: false,
  });

  useEffect(() => {
    if (user) {
      setLocalUser({
        username: user.username,
        is_firm: user.is_firm,
        is_lawyer: user.is_lawyer,
        is_client: user.is_client,
      });
    }
  }, [user]);
  const [redirect, setRedirect] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout_user = () => {
    logout();
    setRedirect(true);
  };

  const guestLinks = () => (
    <Fragment>
      <Button component={Link} color="inherit" to="/login">
        Login{" "}
      </Button>
      <Button component={Link} color="inherit" to="/signup">
        Sign Up
      </Button>
    </Fragment>
  );

  const authLinks = () => (
    <Fragment>
      <Typography variant="h5" component="h5">
        <Typography
          component="span"
          variant="h5"
          color="primary"
          style={{ marginRight: "0.5rem" }}
        >
          Expected Balance :
        </Typography>
        <NumberFormat
          value={23345}
          displayType={"text"}
          thousandSeparator={true}
          prefix="$"
        />
      </Typography>
      <Typography variant="h5" component="h5" ml={1} mr={1}>
        {" "}
        |{" "}
      </Typography>
      <Typography variant="h5" component="h5">
        {time}
      </Typography>
    </Fragment>
  );
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }} component="nav">
        <AppBar position="static" color="transparent" sx={{ border: "none" }}>
          <Toolbar>
            <Typography
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Link to="/">
                <img
                  src={Logo}
                  alt="logo"
                  style={{ height: "2rem", width: "auto" }}
                />
              </Link>
            </Typography>
            <MainSearch>
              <MainSearchIconWrapper>
                <SearchIcon />
              </MainSearchIconWrapper>
              <StyledMainInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </MainSearch>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {!isAuthenticated ? authLinks() : guestLinks()}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {redirect ? <Redirect to="/" /> : <Fragment></Fragment>}
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(Navbar);
