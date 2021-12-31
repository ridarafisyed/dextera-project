/** @format */

import React, { Fragment, useState, useEffect } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Typography,
  Box,
  Switch,
  Button,
  Stack,
} from "@mui/material";
import axios from "axios";
import { CONFIG } from "../../api/MatterApi";
import { ActionAlerts } from "../../utils/ActionAlerts";
import {
  LinkButton,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../styles/styles";
import SearchIcon from "@mui/icons-material/Search";

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
        <Typography component="h4" variant="h5" color="primary" mb={2}>
          Manage Users
        </Typography>
        <Stack p={3} direction="row" spacing={2} sx={{ float: "right" }}>
          <Search sx={{ width: "15rem" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <LinkButton
            component={Button}
            to="/create-user"
            color="success"
            variant="contained"
            sx={{ color: "white", background: "#28c570" }}
          >
            + Add User
          </LinkButton>
        </Stack>

        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow bgColor="#796ef0">
                <TableCell>
                  <Typography color="white">First Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="white">Last Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="white">Email</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="white">Role</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="white">Group</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="white">Last Login</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="white">Status</Typography>
                </TableCell>
                <TableCell>
                  <Switch color="success" defaultChecked />
                </TableCell>
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
