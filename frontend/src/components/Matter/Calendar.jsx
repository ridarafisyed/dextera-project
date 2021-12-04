/** @format */

import React, { Fragment } from "react";
import { Link, Typography, List, ListItem, Paper } from "@mui/material";
import { Box } from "@mui/system";

const Calendar = () => {
  // const [data, setData] = useState([
  //   {
  //     id: 1,
  //     day: "Monday",
  //     time: "08:00am",
  //     todo: "Call Client",
  //   },
  //   {
  //     id: 2,
  //     day: "Tuesday",
  //     time: "09:30am",
  //     todo: "Hearing on X matter",
  //   },
  //   {
  //     id: 3,
  //     day: "Tuesday",
  //     time: "10:45am",
  //     todo: "Starting Motion for Trial",
  //   },
  //   {
  //     id: 4,
  //     day: "Tuesday",
  //     time: "12:00pm",
  //     todo: "Call Client",
  //   },
  //   {
  //     id: 5,
  //     day: "Wednesday",
  //     time: "4:00pm",
  //     todo: "Call Client",
  //   },
  //   {
  //     id: 6,
  //     day: "Friday",
  //     time: "2:00pm",
  //     todo: "Call Client",
  //   },
  // ]);
  return (
    <Fragment>
      <Box component={Paper} mt={2} p={2}>
        <Typography variant="h6" component="h7">
          My Calendar at a Glance
        </Typography>
        <List>
          <ListItem>
            Modnay - 08:00am - <Link to=""> Start motion for trail</Link>
          </ListItem>
          <ListItem>
            Modnay - 08:00am - <Link to=""> Call Client</Link>
          </ListItem>
          <ListItem>
            Modnay - 08:00am - <Link to=""> Call Client</Link>
          </ListItem>
          <ListItem>
            Modnay - 08:00am - <Link to=""> Call Client</Link>
          </ListItem>
          <ListItem>
            Modnay - 08:00am - <Link to=""> Call Client</Link>
          </ListItem>
          <ListItem>
            Modnay - 08:00am - <Link to=""> Call Client</Link>
          </ListItem>
          <ListItem>
            Modnay - 08:00am - <Link to=""> Call Client</Link>
          </ListItem>
        </List>
      </Box>
    </Fragment>
  );
};

export default Calendar;
