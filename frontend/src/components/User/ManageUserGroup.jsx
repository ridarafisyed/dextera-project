/** @format */

import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Box,
  List,
  Table,
  Grid,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  ListItem,
  ListItemText,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import ClearIcon from "@mui/icons-material/Clear";
import { ActionAlerts } from "../../utils/ActionAlerts";
import { LinkButton } from "../../styles/styles";

import { CONFIG } from "../../api/MatterApi";

const ManageUserGroup = () => {
  const [group, setGroup] = useState([]);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingUser, setLoadingUser] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
  });

  const { name } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const FetchUserData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/create-member/`, CONFIG)
      .then((res) => {
        setLoadingUser(false);

        setUserData(res.data);
      })
      .catch((err) => {
        setLoadingUser(false);
      });
  };
  const FetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/groups/`, CONFIG)
      .then((res) => {
        setLoading(false);
        setGroup(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    FetchData();
    FetchUserData();
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/groups/${id}/`, CONFIG)
      .then((res) => {
        FetchData();
        return (
          <ActionAlerts
            value={{ status: res.statusText, message: "Success" }}
          />
        );
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = JSON.stringify({ name });
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/groups/`, body, CONFIG)
      .then((res) => {
        FetchData();
        return (
          <ActionAlerts
            value={{ status: res.statusText, message: "Success" }}
          />
        );
      })
      .catch((err) => {
        FetchData();
        return (
          <ActionAlerts
            value={{ status: err.statusText, message: "Success" }}
          />
        );
      });
  };
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Box p={3} sx={{ float: "right" }}>
            <LinkButton to="/users">Manage User</LinkButton>
            <LinkButton to="/create-user">Create User</LinkButton>
            <LinkButton to="/user-role">Manage Role</LinkButton>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            fullWidth
            sx={{
              borderRadius: "0.5rem",
            }}
          >
            + New Group
          </Button>
          <Dialog
            component="form"
            Validate
            onSubmit={(e) => handleSubmit(e)}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Add New Group"}</DialogTitle>
            <DialogContent>
              <TextField
                required
                fullWidth
                size="small"
                margin="normal"
                variant="outlined"
                name="name"
                label="Group Name"
                type="text"
                value={name}
                onChange={(e) => onChange(e)}
                id="name"
                autoComplete="name"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
              <Button type="submit" autoFocus>
                Add
              </Button>
            </DialogActions>
          </Dialog>
          {!loading ? (
            group.map((data) => (
              <Box mt={1}>
                <List>
                  <ListItem disablePadding>
                    <ListItemText>{data.name}</ListItemText>
                    <Button
                      variant="contained"
                      value={data.id}
                      onClick={() => handleDelete(data.id)}
                      sx={{
                        borderRadius: "0.5rem",
                        float: "right",
                      }}
                    >
                      <ClearIcon />
                    </Button>
                  </ListItem>
                </List>
              </Box>
            ))
          ) : (
            <Typography>Loading ...</Typography>
          )}
        </Grid>
        <Grid item xs={8}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Group</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loadingUser
                  ? null
                  : userData?.map((data) => {
                      return (
                        <TableRow>
                          <TableCell>{data.f_name}</TableCell>
                          <TableCell>{data.l_name}</TableCell>
                          <TableCell>{data.role}</TableCell>
                          <TableCell>{data.group}</TableCell>
                        </TableRow>
                      );
                    })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ManageUserGroup;
