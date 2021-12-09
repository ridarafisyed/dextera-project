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
} from "@mui/material";

import { SecNavbar } from "../../styles/styles";

import {
  Message,
  EmailRounded,
  CalendarToday,
  CheckBox,
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
            <Message /> <EmailRounded /> <CalendarToday /> <CheckBox />
          </Box>
          <NotificationAdd mr={2} />{" "}
          <Typography component="h5" variant="h6" ml={2} mr={2}>
            |
          </Typography>
          <Typography component="h5" variant="h6" mr={2}>
            {time}
          </Typography>
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
            <MenuItem onClick={handleClose}>Setting Option1</MenuItem>
            <MenuItem onClick={handleClose}>Setting Option2</MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose}>Setting Option3</MenuItem>
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
