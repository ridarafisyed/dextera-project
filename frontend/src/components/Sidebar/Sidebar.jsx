/** @format */

import React from "react";
import { Button, Box, Grid, Paper } from "@mui/material";

import {
  KeyboardArrowDown,
  KeyboardArrowRight,
  Task,
  MoneyOff,
  FileCopy,
  Receipt,
  AssignmentTurnedIn,
  AddCircle,
  Work,
  Person,
  KeyboardArrowLeft,
} from "@mui/icons-material";

import { useToggle } from "../../context/useToggle";

import { SideBarBtn } from "../../styles/styles";
import { Link } from "react-router-dom";
// import { UserContext } from '../../context/User';
import "./style.css";

const Sidebar1 = () => {
  const [sidebarToggle, setSidebarToggle] = useToggle(true);

  return (
    <Box component={Paper}>
      <Button
        variant="text"
        sx={
          sidebarToggle
            ? {
                float: "right",
                transition: "transform  2s",
              }
            : { float: "left", transition: "transform  2s" }
        }
        onClick={() => setSidebarToggle(sidebarToggle)}
      >
        {sidebarToggle ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </Button>
      <Box className={sidebarToggle ? "show" : "hide"}>
        <Sidebar1 />
      </Box>
    </Box>
  );
};

const Sidebar = () => {
  const [controlToggle, setControlToggle] = useToggle(true);

  // const [state, dispatch] = useContext(UserContext);
  return (
    <Paper elevation={3}>
      <Button
        variant="text"
        fullWidth
        endIcon={<KeyboardArrowDown />}
        sx={{ padding: "0.5em", marginTop: "0.5em", textTransform: "none" }}
        onClick={() => setControlToggle(controlToggle)}
      >
        Controls
      </Button>
      {controlToggle ? (
        <Box>
          <SideBarBtn variant="outlined">
            <Grid>
              <Box component={Link} to="/">
                <Grid item>
                  <AddCircle fontSize="medium" />
                </Grid>
                <Grid item>DashBoard</Grid>
              </Box>
            </Grid>
          </SideBarBtn>
          <SideBarBtn variant="outlined">
            <Grid>
              <Box component={Link} to="/invoices">
                <Grid item>
                  <Receipt fontSize="medium" />
                </Grid>
                <Grid item>Invoices</Grid>
              </Box>
            </Grid>
          </SideBarBtn>
          <SideBarBtn variant="outlined">
            <Grid>
              <Box component={Link} to="/users">
                <Grid item>
                  <Person fontSize="medium" />
                </Grid>
                <Grid item>Manage User</Grid>
              </Box>
            </Grid>
          </SideBarBtn>
          <SideBarBtn variant="outlined">
            <Grid>
              <Box component={Link} to="/manage-categories">
                <Grid item>
                  <FileCopy fontSize="medium" />
                </Grid>
                <Grid item>Manage Categories</Grid>
              </Box>
            </Grid>
          </SideBarBtn>
          <SideBarBtn variant="outlined">
            <Grid>
              <Box component={Link} to="/ledgers">
                <Grid item>
                  <MoneyOff fontSize="medium" />
                </Grid>
                <Grid item>Ledger</Grid>
              </Box>
            </Grid>
          </SideBarBtn>
          <SideBarBtn variant="outlined">
            <Grid>
              <Box component={Link} to="/create-task">
                <Grid item>
                  <Task fontSize="medium" />
                </Grid>
                <Grid item>Manage Task</Grid>
              </Box>
            </Grid>
          </SideBarBtn>
          <SideBarBtn variant="outlined">
            <Grid>
              <Box component={Link} to="/job-search">
                <Grid item>
                  <Work fontSize="medium" />
                </Grid>
                <Grid item>Employee Search</Grid>
              </Box>
            </Grid>
          </SideBarBtn>
          <SideBarBtn variant="outlined">
            <Grid>
              <Box component={Link} to="/matter-dashboard">
                <Grid item>
                  <AssignmentTurnedIn fontSize="medium" />
                </Grid>
                <Grid item>Matters</Grid>
              </Box>
            </Grid>
          </SideBarBtn>
        </Box>
      ) : null}
    </Paper>
  );
};

export default Sidebar;
