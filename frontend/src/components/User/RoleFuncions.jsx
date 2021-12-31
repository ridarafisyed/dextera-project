/** @format */

import React, { Fragment } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Typography,
} from "@mui/material";

const RoleFuncions = ({ data }) => {
  const functions = [
    "Contacts",
    "Matter",
    "Calendar",
    "Flat Fee",
    "Expenses",
    "Trust",
    "Task(s)",
    "Invoice",
    "Payments",
    "Full DOB",
    "Full SSN",
    "Partial SSN",
    "Partial DOB",
    "Roles",
    "Run Reports",
    "Discounts",
    "Bank Accounts",
  ];
  return (
    <Fragment>
      <TableContainer>
        <Table size="small" sx={{ fontSize: "7px" }}>
          <TableHead>
            <TableRow bgColor="#796ef0">
              <TableCell>
                <Typography color="white">Function</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">View </Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">Edit</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">Create</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">Delete</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">Contacts</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">Team</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">Office</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">Region</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">All</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {functions.map((data) => (
              <TableRow>
                <TableCell>{data}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default RoleFuncions;
