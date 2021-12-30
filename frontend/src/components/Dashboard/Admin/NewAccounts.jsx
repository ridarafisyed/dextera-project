/** @format */

import {
  Paper,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  Typography,
  TableCell,
} from "@mui/material";
import React, { Fragment } from "react";

const NewAccounts = () => {
  return (
    <Fragment>
      <Paper elevation={2} style={{ marginTop: "1rem" }}>
        <Box p={1}>
          <Typography color="blue">New Accounts</Typography>
          <TableContainer>
            <Table fullWidth>
              <TableHead color="blue">
                <TableRow>
                  <TableCell>
                    <Typography color="blue">Username</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="blue">Email</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="blue">Phone#</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="blue">Mail Address</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography>Username</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Email</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Phone#</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Mail Address</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Username</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Email</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Phone#</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Mail Address</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Username</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Email</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Phone#</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Mail Address</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Username</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Email</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Phone#</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Mail Address</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Paper>
    </Fragment>
  );
};

export default NewAccounts;
