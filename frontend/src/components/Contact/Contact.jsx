/** @format */

import React, { Fragment, useState } from "react";
import { TextField, Box, Grid, Button, Typography } from "@mui/material";

const Contact = () => {
  const [contactData, setContactData] = useState({
    company_name: "",
    webiste: "",
    ger_email: "",
    billing_email: "",

    client_no: "",
    f_name: "",
    l_name: "",
    dob: "",
    ssn: "",
    mobile_no: "",
    home_no: "",
    office_no: "",
    fax_no: "",
    other_no: "",
    email_1: "",
    email_2: "",
    email_3: "",
    street: "",
    suite: "",
    city: "",
    state: "",
    zip: "",
    plus_4: "",
    note: "",
  });

  // const {
  //   contact,
  //   matter_number,
  //   matter_name,
  //   alerts,
  //   matter_type,
  //   matter_source,
  //   matter_status,
  //   assign_to,
  //   billing_rate,
  //   open,
  //   closed,
  //   total_days,
  //   jurisdiction,
  //   status_limitaion,
  //   opposing_counsel,
  //   where,
  //   when,
  //   involved,
  //   witnesses,
  //   narrative,
  // } = contactData
  const onChange = (e) =>
    setMatterData({ ...matterData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <Box
        component="form"
        Validate
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        onSubmit={(e) => onSubmit(e)}
      >
        <TextField
          size="small"
          margin="normal"
          variant="outlined"
          name="discount"
          label="discount"
          type="text"
          onChange={(e) => onChange(e)}
          id="discount"
          autoComplete="discount"
        />
        <TextField
          size="small"
          margin="normal"
          variant="outlined"
          name="discount"
          label="discount"
          type="text"
          onChange={(e) => onChange(e)}
          id="discount"
          autoComplete="discount"
        />
        <TextField
          size="small"
          margin="normal"
          variant="outlined"
          name="discount"
          label="discount"
          type="text"
          onChange={(e) => onChange(e)}
          id="discount"
          autoComplete="discount"
        />
        <TextField
          size="small"
          margin="normal"
          variant="outlined"
          name="discount"
          label="discount"
          type="text"
          onChange={(e) => onChange(e)}
          id="discount"
          autoComplete="discount"
        />
        <TextField
          size="small"
          margin="normal"
          variant="outlined"
          name="discount"
          label="discount"
          type="text"
          onChange={(e) => onChange(e)}
          id="discount"
          autoComplete="discount"
        />
        <TextField
          size="small"
          margin="normal"
          variant="outlined"
          name="discount"
          label="discount"
          type="text"
          onChange={(e) => onChange(e)}
          id="discount"
          autoComplete="discount"
        />
        <TextField
          size="small"
          margin="normal"
          variant="outlined"
          name="discount"
          label="discount"
          type="text"
          onChange={(e) => onChange(e)}
          id="discount"
          autoComplete="discount"
        />
        <TextField
          size="small"
          margin="normal"
          variant="outlined"
          name="discount"
          label="discount"
          type="text"
          onChange={(e) => onChange(e)}
          id="discount"
          autoComplete="discount"
        />
        <TextField
          size="small"
          margin="normal"
          variant="outlined"
          name="discount"
          label="discount"
          type="text"
          onChange={(e) => onChange(e)}
          id="discount"
          autoComplete="discount"
        />
        <TextField
          size="small"
          margin="normal"
          variant="outlined"
          name="discount"
          label="discount"
          type="text"
          onChange={(e) => onChange(e)}
          id="discount"
          autoComplete="discount"
        />
        <TextField
          size="small"
          margin="normal"
          variant="outlined"
          name="discount"
          label="discount"
          type="text"
          onChange={(e) => onChange(e)}
          id="discount"
          autoComplete="discount"
        />
        <TextField
          size="small"
          margin="normal"
          variant="outlined"
          name="discount"
          label="discount"
          type="text"
          onChange={(e) => onChange(e)}
          id="discount"
          autoComplete="discount"
        />
      </Box>
    </Fragment>
  );
};

export default Contact;
