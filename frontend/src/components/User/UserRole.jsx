/** @format */
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  List,
  Grid,
  ListItem,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import { ActionAlerts } from "../../utils/ActionAlerts";

import { CONFIG } from "../../api/MatterApi";
import RoleFuncions from "./RoleFuncions";

const UserRole = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
  });
  const [role, setRole] = useState("");

  const roles = [
    "Principal ",
    "Partner ",
    "Director ",
    "Accounting ",
    "Manager",
    "Sr. Attorney ",
    "Jr. Attorney",
    "Paralegal ",
    "Assistant ",
    "Adminitrator ",
    "IT ",
  ];
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
  const [userData, setUserData] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);
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
      .get(`${process.env.REACT_APP_API_URL}/api/roles/`, CONFIG)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setStatus(res.statusText);
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err.message);
      });
  };
  useEffect(() => {
    FetchData();
    FetchUserData();
  }, []);
  // const handleDelete = (id) => {
  //   axios
  //     .delete(`${process.env.REACT_APP_API_URL}/api/roles/${id}/`, CONFIG)
  //     .then((res) => {
  //       FetchData();
  //       return (
  //         <ActionAlerts
  //           value={{ status: res.statusText, message: "Success" }}
  //         />
  //       );
  //     });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = JSON.stringify({ name });
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/roles/`, body, CONFIG)
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
        <Grid item lg={12}></Grid>
        <Grid item lg={2}>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            fullWidth
            sx={{
              borderRadius: "0.5rem",
            }}
          >
            + New Role
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
            <DialogTitle id="alert-dialog-title">{"Add New Role"}</DialogTitle>
            <DialogContent>
              <TextField
                required
                fullWidth
                size="small"
                margin="normal"
                variant="outlined"
                name="name"
                label="Role Name"
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
          {roles.map((data) => (
            <List>
              <ListItem disablePadding>
                <ListItemText>
                  <Button onClick={() => setRole({ data })}>{data} </Button>{" "}
                </ListItemText>
                {/* <Button
                  variant="contained"
                  value={data}
                  onClick={() => handleDelete(data)}
                  sx={{
                    borderRadius: "0.5rem",
                    float: "right",
                  }}
                >
                  <ClearIcon />
                </Button> */}
              </ListItem>
            </List>
          ))}
          {/* {!loading ? (
            category.map((data) => (
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
          )} */}
        </Grid>
        <Grid item lg={10}>
          <RoleFuncions data={role} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default UserRole;
