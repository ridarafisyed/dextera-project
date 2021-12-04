/** @format */

import React, { useState } from "react";

import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";

const MatterList = () => {
  const [redTask, setRedTask] = useState(false);
  const [greenTask, setGreenTask] = useState(false);
  const [yellowTask, setYellowTask] = useState(false);
  const [myTask, setMyTask] = useState(true);
  const [matters, setMatters] = useState(null);

  // useEffect(() => {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   };
  //   const res = axios.get(
  //     `${process.env.REACT_APP_API_URL}/api/matter`,
  //     config,
  //   );
  //   setMatters(res.data);
  // }, []);
  return (
    <Box component={Paper} p={2}>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          control={
            <Checkbox value={myTask} onChange={() => setMyTask(!myTask)} />
          }
          label="My Tasks"
        />
        <FormControlLabel
          control={
            <Checkbox value={redTask} onChange={() => setRedTask(!redTask)} />
          }
          label="Red Tasks"
        />
        <FormControlLabel
          control={
            <Checkbox
              value={greenTask}
              onChange={() => setGreenTask(!greenTask)}
            />
          }
          label="Green Tasks"
        />
        <FormControlLabel
          control={
            <Checkbox
              value={yellowTask}
              onChange={() => setYellowTask(!yellowTask)}
            />
          }
          label="Yellow Tasks"
        />
      </FormGroup>
      <Typography component="h3">All Matters Task's List</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Matter Tasks</TableCell>
              <TableCell>Matter Name</TableCell>
              <TableCell>Last Action</TableCell>
              <TableCell>Next Action</TableCell>
              <TableCell>Assign To</TableCell>
            </TableRow>
            {matters?.map((matter) => {
              <TableRow id={matter.id}>
                <TableCell>{matter.type}</TableCell>
                <TableCell>{matter.name}</TableCell>
                <TableCell>{matter.lastAction}</TableCell>
                <TableCell>{matter.nextAction}</TableCell>
                <TableCell>{matter.assign_to}</TableCell>
              </TableRow>;
            })}
          </TableHead>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MatterList;
