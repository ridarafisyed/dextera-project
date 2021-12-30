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

const LedgerActivity = () => {
  const [activityData, setActivityData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const FetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/add-time/`, CONFIG)
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
          Ledger Activity
        </Typography>
        <Box p={3}>
          <LinkButton to="/ledgers" sx={{ float: "right" }}>
            Ledger Dashboard
          </LinkButton>
          <LinkButton to="/ledger-list" sx={{ float: "right" }}>
            Ledger List
          </LinkButton>
          <LinkButton to="/ledger-documents" sx={{ float: "right" }}>
            Documents
          </LinkButton>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Files</TableCell>
                <TableCell>Cateagory</TableCell>
                <TableCell>Sub-Category</TableCell>
                <TableCell>Notes</TableCell>
                <TableCell>Source</TableCell>
                <TableCell>User</TableCell>
                <TableCell>In/Out</TableCell>
              </TableRow>
            </TableHead>
            {loading
              ? null
              : activityData?.map((data) => {
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
                })}
          </Table>
        </TableContainer>
      </Box>
    </Fragment>
  );
};

export default LedgerActivity;
