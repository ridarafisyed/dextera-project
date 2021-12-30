/** @format */
/** @format */

import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";

// styling imports
import {
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Fade,
  Divider,
  Button,
  Link,
} from "@mui/material";

import { SecNavbar } from "../../styles/styles";

import {
  Message,
  EmailRounded,
  CalendarToday,
  CheckBox,
  Person,
  NotificationAdd,
  Settings,
} from "@mui/icons-material/";

const NavbarSec = () => {
  const today = new Date();
  const time = today.toLocaleTimeString();
  // const [localuser, setLocalUser] = useState({
  //   username: "Guest",
  //   is_firm: true,
  //   is_lawyer: false,
  //   is_client: false,
  // });

  // useEffect(() => {
  //   if (user) {
  //     setLocalUser({
  //       username: user.username,
  //       is_firm: user.is_firm,
  //       is_lawyer: user.is_lawyer,
  //       is_client: user.is_client,
  //     });
  //   }
  // }, [user]);
  const [redirect, setRedirect] = useState(false);

  const [settingAcnchorEl, setSettingAcnchorEl] = useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const logout_user = () => {
    logout();
    setRedirect(true);
  };

  const open = Boolean(anchorEl);
  const [localuser, setLocalUser] = useState({
    username: "Admin",
    is_firm: true,
    is_lawyer: false,
    is_client: false,
  });

  const openSetting = Boolean(settingAcnchorEl);

  const handleClick = (event) => {
    setSettingAcnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setSettingAcnchorEl(null);
  };

  return (
    <Fragment>
      <SecNavbar>
        <Toolbar>
          <Box component="div" sx={{ flexGrow: 1 }}>
            <Message />
            <EmailRounded />
            <CalendarToday /> <CheckBox />
          </Box>
          <NotificationAdd mr={2} />
          <Typography component="h5" variant="h6" ml={2} mr={2}>
            |
          </Typography>

          <Button
            color="inherit"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Person /> {localuser.username} - ({" "}
            {localuser.is_firm ? "Admin" : "Client"} )
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
              Profile
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
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls="long-menu"
            aria-expanded={openSetting ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            sx={{
              color: "white",
            }}
          >
            <Settings />
          </IconButton>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={settingAcnchorEl}
            open={openSetting}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Account</MenuItem>
            <MenuItem onClick={handleClose}>Setting</MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </SecNavbar>

      {redirect ? <Redirect to="/" /> : <Fragment></Fragment>}
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(NavbarSec);
