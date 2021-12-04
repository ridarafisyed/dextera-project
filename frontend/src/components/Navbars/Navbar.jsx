/** @format */

import React, { Fragment, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";

// styling imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Logo from "../../asserts/logo_white copy.png";

const Navbar = ({ logout, isAuthenticated, user }) => {
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
      <Button
        color="inherit"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {localuser.username} - ( {localuser.is_firm ? "Firm" : "Client"} )
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem component={Link} to="/profile">
          Profile{" "}
        </MenuItem>
        {/* <MenuItem component={Link} to=''>My account</MenuItem> */}
        <MenuItem
          component={Link}
          color="inherit"
          href="#!"
          onClick={logout_user}
        >
          Logout
        </MenuItem>
      </Menu>
      <Button component={Link} color="inherit" to="/dashboard">
        Dashboard{" "}
      </Button>
      <Button component={Link} color="inherit" href="#!" onClick={logout_user}>
        Logout
      </Button>
    </Fragment>
  );
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }} component="nav">
        <AppBar position="static" color="transparent">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">
                {" "}
                <img
                  src={Logo}
                  alt="logo"
                  style={{ height: "2rem", width: "auto" }}
                />
              </Link>
            </Typography>
            {isAuthenticated ? authLinks() : guestLinks()}
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
