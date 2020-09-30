import React from "react";
import { Link } from "@reach/router";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>{" "}
      <Link to="invoices">Invoices</Link>
    </nav>
  );
}
