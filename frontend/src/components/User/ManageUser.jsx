/** @format */

import React, { Fragment, useState, useEffect } from "react";
import {
  Table,
  Grid,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Typography,
  Checkbox,
  Box,
} from "@mui/material";
import axios from "axios";
import { CONFIG } from "../../api/MatterApi";
import { ActionAlerts } from "../../utils/ActionAlerts";
import { LinkButton } from "../../styles/styles";

const ManageUser = () => {
  const [activityData, setActivityData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const FetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/create-member/`, CONFIG)
      .then((res) => {
        setLoading(false);
        setStatus(res.statusText);
        setActivityData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setStatus(err.statusText);
      });
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <Fragment>
      <Box>
        <Typography component="h4" variant="h5" mb={2}>
          Manage Users
        </Typography>
        <Box p={3} sx={{ float: "right" }}>
          <LinkButton to="/create-user">Create User</LinkButton>
          <LinkButton to="/user-group">Manage User Group</LinkButton>
          <LinkButton to="/user-role">Manage User Role</LinkButton>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Group</TableCell>
                <TableCell>Last Login</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading
                ? null
                : activityData?.map((data) => {
                    return (
                      <TableRow>
                        <TableCell>{data.f_name}</TableCell>
                        <TableCell>{data.l_name}</TableCell>
                        <TableCell>{data.p_email}</TableCell>
                        <TableCell>{data.role}</TableCell>
                        <TableCell>{data.group}</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>inactive</TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Fragment>
  );
};

export default ManageUser;
