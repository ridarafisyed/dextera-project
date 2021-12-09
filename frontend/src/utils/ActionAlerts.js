/** @format */

import React from "react";
import { Alert } from "@mui/material";

const ActionAlerts = (status) => {
  switch (status) {
    case "OK":
      return <Alert severity="success">Sussues</Alert>;
    case "error":
      return <Alert severity="error">Error</Alert>;
    default:
      return (
        <Alert severity="info">Something went wronge Please tryagain</Alert>
      );
  }
};

export default ActionAlerts;
