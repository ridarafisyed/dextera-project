/** @format */

import React, { useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
} from "@mui/material";

const MatterListLong = () => {
  const [matters, setMatters] = useState(null);

  // useEffect(() => {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   };
  //   const res = axios.get(
  //     `${process.env.REACT_APP_API_URL}/api/invoices_long_list`,
  //     config,
  //   );
  //   setMatters(res.data);
  // }, []);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Matter Tasks</TableCell>
            <TableCell>Matter Name</TableCell>
            <TableCell>Matter Contact</TableCell>
            <TableCell>Matter Type</TableCell>
            <TableCell>Bill Rate</TableCell>
            <TableCell>Last Action</TableCell>
            <TableCell>Next Action</TableCell>
            <TableCell>Assigned to</TableCell>
            <TableCell>Billable</TableCell>
            <TableCell>Open Invoice</TableCell>
            <TableCell>Trust Account</TableCell>
            <TableCell>Last Payment</TableCell>
          </TableRow>
          {matters?.map((matter) => {
            <TableRow id={matter.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>Matter Tasks</TableCell>
              <TableCell>Matter Name</TableCell>
              <TableCell>Matter Contact</TableCell>
              <TableCell>Matter Type</TableCell>
              <TableCell>Bill Rate</TableCell>
              <TableCell>Last Action</TableCell>
              <TableCell>Next Action</TableCell>
              <TableCell>Assigned to</TableCell>
              <TableCell>Billable</TableCell>
              <TableCell>Open Invoice</TableCell>
              <TableCell>Trust Account</TableCell>
              <TableCell>Last Payment</TableCell>
            </TableRow>;
          })}
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default MatterListLong;
