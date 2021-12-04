/** @format */

import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import AdminDashboard from "./UserRoles/AdminDashboard";
import ClientDashboard from "./UserRoles/ClientDashboard";
import LawyerDashboard from "./UserRoles/LawyerDashboard";
import FirmDashboard from "./UserRoles/FirmDashboard";

const Dashboard = ({ user }) => {
  // checker type of user
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
