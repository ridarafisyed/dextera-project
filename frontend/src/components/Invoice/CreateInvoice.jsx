/** @format */

import React, { Fragment, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  FormControlLabel,
  Switch,
  Button,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { LocalizationProvider, DateRangePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LinkButton } from "../../styles/styles";

import { useToggle } from "../../context/useToggle";

const CreateInvoice = () => {
  const [approvel, setApprovel] = useToggle(false);
  const [invoiceData, setInvoiceData] = useState({
    matter: "",
    contact: "",
    billable: false,
    date_range: "",
    create_date: "",
    due_date: "",
    template: "",
    invoice_no: "",
    discount: "",
    submit: false,
  });

  // const {
  //   matter,
  //   contact,
  //   billable,
  //   date_range,
  //   create_date,
  //   due_date,
  //   template,
  //   invoice_no,
  //   discount,
  //   submit,
  // } = invoiceData;
  const onChange = (e) =>
    setInvoiceData({ ...invoiceData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const [invoice, setInvoice] = useState(null);
  // useEffect(() => {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   };
  //   const res = axios.get(
  //     `${process.env.REACT_APP_API_URL}/api/invoice`,
  //     config,
  //   );
  //   setInvoice(res.data);
  // }, []);

  const [dateRange, setDateRange] = React.useState([null, null]);
  return (
    <Fragment>
      <Typography component="h3" variant="h4">
        Create New Invoice
      </Typography>
      <Box p={3}>
        <LinkButton to="/invoices" sx={{ float: "right" }}>
          Invoice Dashboard
        </LinkButton>
      </Box>
      <Box
        component="form"
        Validate
        sx={{
          "& .MuiTextField-root": { m: 1, width: "15rem" },
        }}
        onSubmit={(e) => onSubmit(e)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="matter"
              label="matter"
              type="text"
              onChange={(e) => onChange(e)}
              id="matter"
              autoComplete="matter"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="contact"
              label="contact"
              type="text"
              onChange={(e) => onChange(e)}
              id="contact"
              autoComplete="contact"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="billable"
                  value="billable"
                  onChange={(e) => onChange(e)}
                  id="billable"
                />
              }
              label="Unbillable"
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Typography sx={{ mt: 2, mb: 1 }}> Date Range </Typography>
              <DateRangePicker
                calendars={1}
                value={dateRange}
                onChange={(newValue) => {
                  setDateRange(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <Fragment>
                    <TextField size="small" {...startProps} />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField size="small" {...endProps} />
                  </Fragment>
                )}
              />
            </LocalizationProvider>
            <TextField
              size="small"
              id="create_date"
              label="create_date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              size="small"
              id="due_date"
              label="due_date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="template"
              label="template"
              type="text"
              onChange={(e) => onChange(e)}
              id="template"
              autoComplete="template"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="contact"
              label="contact"
              type="text"
              onChange={(e) => onChange(e)}
              id="contact"
              autoComplete="contact"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="invoice_no"
              label="invoice_no"
              type="text"
              onChange={(e) => onChange(e)}
              id="invoice_no"
              autoComplete="invoice_no"
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
            <FormControlLabel
              label="Submit For Approvel"
              control={
                <Switch
                  checked={approvel}
                  onChange={() => setApprovel(approvel)}
                />
              }
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Sub-Category</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Hours</TableCell>
                    <TableCell>Rate</TableCell>
                    <TableCell>Sub</TableCell>
                    <TableCell>Tax</TableCell>
                    <TableCell>int</TableCell>
                    <TableCell>Disc.</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Biller</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  {invoice?.map((invoice) => {
                    <TableRow id={invoice.id}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>

                      <TableCell>{invoice.sub_cat}</TableCell>
                      <TableCell>{invoice.discription}</TableCell>
                      <TableCell>{invoice.date}</TableCell>
                      <TableCell>{invoice.hours}</TableCell>
                      <TableCell>{invoice.rate}</TableCell>
                      <TableCell>{invoice.sub}</TableCell>
                      <TableCell>{invoice.tax}</TableCell>
                      <TableCell>{invoice.int}</TableCell>
                      <TableCell>{invoice.dics}</TableCell>
                      <TableCell>{invoice.total}</TableCell>
                      <TableCell>{invoice.biller}</TableCell>
                    </TableRow>;
                  })}
                </TableHead>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item mt={3}>
            <FormControlLabel
              control={
                <Checkbox
                  name="billable"
                  value="billable"
                  onChange={(e) => onChange(e)}
                  id="billable"
                />
              }
              label="Notes"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="billable"
                  value="billable"
                  onChange={(e) => onChange(e)}
                  id="Accept Online Payment"
                />
              }
              label="Unbillable"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="billable"
                  value="billable"
                  onChange={(e) => onChange(e)}
                  id="billable"
                />
              }
              label="Terms & Conditions"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="billable"
                  value="billable"
                  onChange={(e) => onChange(e)}
                  id="billable"
                />
              }
              label="Add interest (Compound / Simple)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="billable"
                  value="billable"
                  onChange={(e) => onChange(e)}
                  id="billable"
                />
              }
              label="Use Trust Balanace"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="billable"
                  value="billable"
                  onChange={(e) => onChange(e)}
                  id="billable"
                />
              }
              label="Send Reminders Every"
            />
            <TextField size="small" sx={{ width: "5rem" }} />

            <FormControlLabel
              control={
                <Checkbox
                  name="billable"
                  value="billable"
                  onChange={(e) => onChange(e)}
                  id="billable"
                />
              }
              label="Add all unpaid invoices"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="billable"
                  value="billable"
                  onChange={(e) => onChange(e)}
                  id="billable"
                />
              }
              label="use Operating Balance"
            />
            <br />
            <Button
              variant="contained"
              sx={{ float: "right" }}
              endIcon={<SaveIcon />}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default CreateInvoice;
