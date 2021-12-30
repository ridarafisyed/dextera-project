/** @format */

import React, { Fragment } from "react";
import Navbar from "../components/Navbars/Navbar";
import NavbarSec from "../components/Navbars/NavbarSec";
import Sidebar from "../components/Sidebar/Sidebar";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../store/actions/auth";
import { useToggle } from "../context/useToggle";

import { Grid, Paper, Button, Box, IconButton } from "@mui/material";

import {
  KeyboardArrowRight,
  KeyboardArrowLeft,
  Chat,
  ChatBubble,
} from "@mui/icons-material";

import Footer from "../components/Footer/Footer";
const Layout = ({
  // checkAuthenticated,
  // load_user,
  children,
  isAuthenticated,
}) => {
  const [sidebarToggle, setSidebarToggle] = useToggle(true);
  return (
    <Paper style={{ margin: "0" }}>
      <Grid contianer rowSpacing={2} columnSpacing={2}>
        <Grid item lg={12} md={12} lg={12}>
          {!isAuthenticated ? (
            <Fragment>
              <NavbarSec />
            </Fragment>
          ) : (
            <Navbar />
          )}
        </Grid>

        {!isAuthenticated ? (
          <Fragment>
            <Grid item lg={12}>
              <Navbar />
            </Grid>
            <Grid container direction="row" wrap="nowrap">
              {sidebarToggle ? (
                <Fragment>
                  <Grid item lg={2} xs={12} m={3}>
                    <Sidebar />
                  </Grid>
                  <Grid item lg={10} xs={12} p={1}>
                    <Box>
                      <Button
                        variant="text"
                        onClick={() => setSidebarToggle(sidebarToggle)}
                      >
                        {sidebarToggle ? (
                          <KeyboardArrowLeft />
                        ) : (
                          <KeyboardArrowRight />
                        )}
                      </Button>
                    </Box>
                    {children}
                  </Grid>
                </Fragment>
              ) : (
                <Fragment>
                  <Grid item lg={12} xs={12} p={1}>
                    <Box>
                      <Button
                        variant="text"
                        onClick={() => setSidebarToggle(sidebarToggle)}
                      >
                        {sidebarToggle ? (
                          <KeyboardArrowLeft />
                        ) : (
                          <KeyboardArrowRight />
                        )}
                      </Button>
                    </Box>
                    {children}
                  </Grid>
                </Fragment>
              )}
            </Grid>
            <Grid item lg={12}>
              <Footer />
            </Grid>
          </Fragment>
        ) : (
          <Grid item lg={12} xs={12}>
            {children}
          </Grid>
        )}
        <IconButton
          color="primary"
          size="large"
          sx={{
            position: "fixed",
            right: "3rem",
            bottom: "3rem",
            zIndex: "100",
            "&:hover": {
              color: "#461594",
            },
          }}
        >
          <ChatBubble sx={{ fontSize: "3rem" }} />
        </IconButton>
      </Grid>
    </Paper>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { checkAuthenticated, load_user })(
  Layout,
);
