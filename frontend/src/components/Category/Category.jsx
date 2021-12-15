/** @format */
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Box,
  List,
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

const CONFIG = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const catHandler = (id) => {
  console.log(id);
};

const Category = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
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

  const FetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/category/`, CONFIG)
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
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/category/${id}/`, CONFIG)
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
      .post(`${process.env.REACT_APP_API_URL}/api/category/`, body, CONFIG)
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
      <Button
        variant="contained"
        onClick={handleClickOpen}
        fullWidth
        sx={{
          borderRadius: "0.5rem",
        }}
      >
        + New category
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
        <DialogTitle id="alert-dialog-title">{"Add New Category"}</DialogTitle>
        <DialogContent>
          <TextField
            required
            fullWidth
            size="small"
            margin="normal"
            variant="outlined"
            name="name"
            label="Category Name"
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
      )}
    </Fragment>
  );
};

export default Category;
