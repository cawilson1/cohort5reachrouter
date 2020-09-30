import React from "react";

import { Router } from "@reach/router";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Invoices from "../pages/Invoices";
import Invoice from "../pages/Invoice";
import InvoicesIndex from "../pages/InvoicesIndex";

export default function PublicRoutes() {
  return (
    <Router>
      <NotFound default />
      <Home path="/" />
      <Dashboard path="/dashboard" />
      <Invoices path="invoices">
        <InvoicesIndex path="/"></InvoicesIndex>
        <Invoice path=":invoiceId" />
        {/* colon says that the variable in props is named what is after the colon */}
      </Invoices>
    </Router>
  );
}
