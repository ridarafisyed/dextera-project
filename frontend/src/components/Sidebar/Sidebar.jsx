/** @format */

import React, { Fragment, useContext } from 'react';
import { Button, Box, Grid, Paper } from '@mui/material';

import {
  TodayRounded,
  TrendingUp,
  KeyboardArrowDown,
  Task,
  MoneyOff,
  MonetizationOn,
  FileCopy,
  HourglassBottom,
  AssignmentTurnedIn,
  Map,
  AddCircle,
  TodayOutlined,
} from '@mui/icons-material';

import { useToggle } from '../../context/useToggle';

import { SideBarBtn } from '../../styles/styles';
import { Link } from 'react-router-dom';
// import { UserContext } from '../../context/User';

const Sidebar = () => {
  const [revToggle, setRevToggle] = useToggle(true);
  const [empToggle, setEmpToggle] = useToggle(true);

  // const [state, dispatch] = useContext(UserContext);
  return (
    <Paper elevation={3}>
      <Button
        variant="text"
        fullWidth
        endIcon={<KeyboardArrowDown />}
        sx={{ padding: '0.5em', marginTop: '0.5em', textTransform: 'none' }}
        onClick={() => setEmpToggle(empToggle)}
      >
        Employee Performance
      </Button>
      {empToggle ? (
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
              <Grid item>
                <HourglassBottom fontSize="medium" />
              </Grid>
              <Grid item>Billable Hour</Grid>
            </Grid>
          </SideBarBtn>
          <SideBarBtn variant="outlined">
            <Grid>
              <Grid item>
                <FileCopy fontSize="medium" />
              </Grid>
              <Grid item>Billable v Non-Billable</Grid>
            </Grid>
          </SideBarBtn>
          <SideBarBtn variant="outlined">
            <Grid>
              <Grid item>
                <MoneyOff fontSize="medium" />
              </Grid>
              <Grid item>Spending</Grid>
            </Grid>
          </SideBarBtn>
          <SideBarBtn variant="outlined">
            <Grid>
              <Grid item>
                <MonetizationOn fontSize="medium" />
              </Grid>
              <Grid item>Profit & Lost</Grid>
            </Grid>
          </SideBarBtn>
          <SideBarBtn variant="outlined">
            <Grid>
              <Grid item>
                <Task fontSize="medium" />
              </Grid>
              <Grid item>Tasks</Grid>
            </Grid>
          </SideBarBtn>
        </Box>
      ) : null}
    </Paper>
  );
};

export default Sidebar;
