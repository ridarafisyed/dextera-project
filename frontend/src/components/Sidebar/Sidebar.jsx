/** @format */

import React from "react";
import { Button, Box, Grid, Paper } from "@mui/material";

import {
  KeyboardArrowDown,
  Task,
  MoneyOff,
  FileCopy,
  Receipt,
  HourglassBottom,
  AssignmentTurnedIn,
  Map,
  AddCircle,
  Work,
  Person,
} from "@mui/icons-material";

import { useToggle } from "../../context/useToggle";

import { SideBarBtn } from "../../styles/styles";
import { Link } from "react-router-dom";
// import { UserContext } from '../../context/User';

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
              <Box component={Link} to="/dashboard">
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
              <Box component={Link} to="/Profile">
                <Grid item>
                  <Map fontSize="medium" />
                </Grid>
                <Grid item>Profile</Grid>
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
                <Grid item>New Task</Grid>
              </Box>
            </Grid>
          </SideBarBtn>
          <SideBarBtn variant="outlined">
            <Grid>
              <Box component={Link} to="/job-search">
                <Grid item>
                  <Work fontSize="medium" />
                </Grid>
                <Grid item>Job Search</Grid>
              </Box>
            </Grid>
          </SideBarBtn>
          <SideBarBtn variant="outlined">
            <Grid>
              <Box component={Link} to="/matter-dashboard">
                <Grid item>
                  <AssignmentTurnedIn fontSize="medium" />
                </Grid>
                <Grid item>Matters Dashboard</Grid>
              </Box>
            </Grid>
          </SideBarBtn>
          <SideBarBtn variant="outlined">
            <Grid>
              <Box component={Link} to="/matters">
                <Grid item>
                  <AssignmentTurnedIn fontSize="medium" />
                </Grid>
                <Grid item>Matters</Grid>
              </Box>
            </Grid>
          </SideBarBtn>
          <SideBarBtn variant="outlined">
            <Grid>
              <Box component={Link} to="/matter-detail">
                <Grid item>
                  <AssignmentTurnedIn fontSize="medium" />
                </Grid>
                <Grid item>Matter Detail</Grid>
              </Box>
            </Grid>
          </SideBarBtn>
          <SideBarBtn variant="outlined">
            <Grid>
              <Box component={Link} to="/create-matter">
                <Grid item>
                  <AssignmentTurnedIn fontSize="medium" />
                </Grid>
                <Grid item>New Matter</Grid>
              </Box>
            </Grid>
          </SideBarBtn>
        </Box>
      ) : null}
    </Paper>
  );
};

export default Sidebar;
