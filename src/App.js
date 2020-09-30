import React from "react";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Invoices from "./pages/Invoices";
import Invoice from "./pages/Invoice";
import InvoicesIndex from "./pages/InvoicesIndex";

function App() {
  return (
    <div>
      <Navbar />
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
    </div>
  );
}

export default App;
