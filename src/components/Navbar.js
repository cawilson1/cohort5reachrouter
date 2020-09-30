import React from "react";
import { Link } from "@reach/router";

export default function Navbar({ setSignedIn, signedIn }) {
  return (
    <nav>
      <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>{" "}
      <Link to="invoices">Invoices</Link>
      <button onClick={() => setSignedIn(!signedIn)}>Sign in</button>
    </nav>
  );
}
