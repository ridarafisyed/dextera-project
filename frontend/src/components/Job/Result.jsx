/** @format */

import React, { Fragment, useState } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Typography,
  Checkbox,
  Box,
} from "@mui/material";
// import axios from "axios";
// import { CONFIG } from "../../api/MatterApi";
// import { ActionAlerts } from "../../utils/ActionAlerts";
import { LinkButton } from "../../styles/styles";

const Result = () => {
  const [activityData, setActivityData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");
  // const [status, setStatus] = useState("");
  //   const FetchData = () => {
  //     axios
  //       .get(`${process.env.REACT_APP_API_URL}/api/add-time/`, CONFIG)
  //       .then((res) => {
  //         setLoading(false);
  //         setStatus(res.statusText);
  //         setActivityData(res.data);
  //       })
  //       .catch((err) => {
  //         setLoading(false);
  //         setStatus(err.statusText);
  //       });
  //   };
  //   useEffect(() => {
  //     FetchData();
  //   }, []);
  return (
    <Fragment>
      <Box>
        <Typography component="h4" variant="h5" mb={2}>
          Search Result
        </Typography>
        <Box p={3}>
          <LinkButton to="/jb-search" sx={{ float: "right" }}>
            Job search
          </LinkButton>
          <LinkButton to="/job-view" sx={{ float: "right" }}>
            Job View
          </LinkButton>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Rate</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>City</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>Grage Year</TableCell>
                <TableCell>Practice Area</TableCell>
                <TableCell>Relocation</TableCell>
                <TableCell>Practicing</TableCell>
              </TableRow>
            </TableHead>
            {loading ? (
              <TableBody>
                <TableRow>
                  <TableCell>74%</TableCell>
                  <TableCell>Smith, John</TableCell>
                  <TableCell>San Diego</TableCell>
                  <TableCell>CA</TableCell>
                  <TableCell>Yes</TableCell>
                  <TableCell>2000</TableCell>
                  <TableCell>Criminal</TableCell>
                  <TableCell>No</TableCell>
                  <TableCell>22y - 03M</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>72%</TableCell>
                  <TableCell>Cassidy, Butch</TableCell>
                  <TableCell>Los Angeles</TableCell>
                  <TableCell>CA</TableCell>
                  <TableCell>No</TableCell>
                  <TableCell>2021</TableCell>
                  <TableCell>Transctional</TableCell>
                  <TableCell>No</TableCell>
                  <TableCell>0y - 02M</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>50%</TableCell>
                  <TableCell>Short, Mart</TableCell>
                  <TableCell>Sacramento</TableCell>
                  <TableCell>CA</TableCell>
                  <TableCell>Yes</TableCell>
                  <TableCell>2013</TableCell>
                  <TableCell>Civil</TableCell>
                  <TableCell>Yes</TableCell>
                  <TableCell>06y - 11M</TableCell>
                </TableRow>
              </TableBody>
            ) : (
              activityData?.map((data) => {
                return (
                  <TableBody id={data.id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{data.date}</TableCell>
                    <TableCell>x</TableCell>
                    <TableCell>{data.category}</TableCell>
                    <TableCell>{data.sub_category}</TableCell>
                    <TableCell>{data.note}</TableCell>
                    <TableCell>
                      {data.billable ? "email" : "workflow"}
                    </TableCell>
                    <TableCell>{data.bill_by}</TableCell>
                    <TableCell>{data.billable ? "In" : "Out"}</TableCell>
                  </TableBody>
                );
              })
            )}
          </Table>
        </TableContainer>
      </Box>
    </Fragment>
  );
};

export default Result;
