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
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  LinkButton,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../styles/styles";
import SearchIcon from "@mui/icons-material/Search";

import ClearIcon from "@mui/icons-material/Clear";
import { ActionAlerts } from "../../utils/ActionAlerts";

import { CONFIG } from "../../api/MatterApi";

const ManageUserGroup = () => {
  const [filter, setFilter] = useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
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
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <Grid container spacing={2} direction="row">
            <Grid item lg={3}>
              <Typography variant="h5" component="h5" m={1} color="primary">
                Manage Group
              </Typography>
            </Grid>
            <Grid item lg={9}>
              <Stack direction="row" sx={{ float: "right" }}>
                <Typography m={2} component="span" color="primary">
                  Filter & Sort By
                </Typography>
                <FormControl sx={{ width: "10rem", height: "2.5rem" }}>
                  <InputLabel id="demo-simple-select-label" color="primary">
                    Custom Sort
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value="name">By Name</MenuItem>
                    <MenuItem value="role">By Role</MenuItem>
                    <MenuItem value="gorup">By Group</MenuItem>
                  </Select>
                </FormControl>
                <Search sx={{ width: "20rem", height: "2.5rem", m: 1 }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={3}>
          <Typography
            variant="h5"
            component="h5"
            color="primary"
            align="center"
          >
            Groups
          </Typography>
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
        <Grid item lg={9}>
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
                    <Typography color="white">Role</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="white">Group</Typography>
                  </TableCell>
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
        <Grid item lg={12}>
          <Box sx={{ float: "right" }}>
            <Button variant="contained" color="success" sx={{ color: "white" }}>
              Done
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ManageUserGroup;
