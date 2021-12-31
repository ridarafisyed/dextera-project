/** @format */

import React, { Fragment } from "react";
import Tabs from "../Tabs/Tabs";
import InvoiceList from "./InvoiceList";
import Payment from "./Payment";
import CreateInvoice from "./CreateInvoice";

const Index = () => {
  return (
    <Fragment>
      <Tabs>
        <div label="Invoice">
          <InvoiceList />
        </div>
        <div label="Crate Invoice">
          <CreateInvoice />
        </div>
        <div label="Payments">
          <Payment />
        </div>
      </Tabs>
    </Fragment>
  );
};

export default Index;
