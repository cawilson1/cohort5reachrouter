import React from "react";

import { Router } from "@reach/router";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

export default function PublicRoutes() {
  return (
    <Router>
      <NotFound default />
      <Home path="/" />
      <Dashboard path="/dashboard" />
      {/* <Invoices path="invoices">
        <InvoicesIndex path="/"></InvoicesIndex>
        <Invoice path=":invoiceId" />
      </Invoices> */}
    </Router>
  );
}
