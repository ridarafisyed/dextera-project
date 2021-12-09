/** @format */

import React, { Fragment, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Typography, Grid } from "@mui/material";

import SubCategory from "./SubCategory";
import Category from "./Category";
import Classification from "./Classification";

const CONFIG = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const ManageCategory = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [classificationData, setClassificationData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .all([
  //       axios.get(`${process.env.REACT_APP_API_URL}/api/category/`, CONFIG),
  //       axios.get(`${process.env.REACT_APP_API_URL}/api/category/`, CONFIG),
  //       axios.get(`${process.env.REACT_APP_API_URL}/api/category/`, CONFIG),
  //     ])
  //     .then((response) => {
  //       setLoading(false);
  //       setCategoryData(response[0].data);
  //       setSubCategoryData(response[1].data);
  //       setClassificationData(response[2].data);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       setError("Opps! Somethingwent wrong. Please Try Again.");
  //     });
  // }, []);

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={8}>
          <Typography component="h3" variant="h5">
            Manage Category, Sub-category, Classification
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={5} mt={1}>
            <Grid item xs={4}>
              <Category />
            </Grid>
            <Grid item xs={4}>
              <SubCategory />
            </Grid>
            <Grid item xs={4}>
              <Classification />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ManageCategory;
