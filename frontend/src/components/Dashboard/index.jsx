/** @format */

import React, { useState, useEffect, useContext, Fragment } from 'react';

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
// import { UserContext } from '../../context/User';

import { connect } from 'react-redux';
import AdminDashboard from './AdminDashboard';
import ClientDashboard from './ClientDashboard';
import LawyerDashboard from './LawyerDashboard';
import FirmDashboard from './FirmDashboard';
import Profile from '../Profile/Profile';
import Sidebar from '../Sidebar/Sidebar';

// import DashboardNavbar from '../Navbars/DashboardNavbar';

const Dashboard = ({ user }) => {
  // checker type of user
  const [localuser, setLocalUser] = useState({
    username: 'Guest',
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

  const dashboardRedirect = () => {
    if (localuser.is_firm) {
      return <FirmDashboard />;
    } else if (localuser.is_client) {
      return <ClientDashboard />;
    } else if (localuser.is_lawyer) {
      return <LawyerDashboard />;
    } else {
      return <AdminDashboard />;
    }
  };
  return <>{dashboardRedirect()}</>;
};
const mapStateToProps = (state) => ({
  // isAuthenticated: state.auth.isAuthenticated
  user: state.auth.user,
});

export default connect(mapStateToProps)(Dashboard);
