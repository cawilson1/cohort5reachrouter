import React from "react";
import { Link, Router } from "@reach/router";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>
      </nav>
      Hey I am here
      <Router>
        <Home path="/" />
        <Dashboard path="/dashboard" />
        <Invoice path="invoices/:invoiceId" />
        {/* colon says that the variable in props is named what is after the colon */}
      </Router>
      <Link to="invoices/amaze">Invoice amaze</Link>{" "}
      <Link to="invoices/75">Invoice 75</Link>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Welcome</h2>
    </div>
  );
}

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);

const Invoice = ({ invoiceId }) => {
  return (
    <div>
      <h2>Invoice {invoiceId}</h2>
    </div>
  );
};

export default App;
