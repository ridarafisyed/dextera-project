/** @format */

import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const Cards = ({ data }) => {
  return (
    <>
      <Box
        key={data.id}
        component="span"
        sx={{ display: "inline-block", mx: "1.5rem" }}
      >
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {data.title}
            </Typography>
            <Typography variant="h3" component="h4">
              $ {data.amount}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Cards;
