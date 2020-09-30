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
      </Router>
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

export default App;
