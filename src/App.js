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
        <Invoices path="invoices">
          <InvoicesIndex path="/"></InvoicesIndex>
          <Invoice path=":invoiceId" />
          {/* colon says that the variable in props is named what is after the colon */}
        </Invoices>
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

const Invoice = ({ invoiceId }) => {
  // useEffect(()=>{
  //   //api call to
  //   //localhost:3000/invoices?invoice=invoiceId
  // },[])
  return (
    <div>
      <h2>Invoice {invoiceId}</h2>
    </div>
  );
};

const Invoices = ({ children }) => {
  return (
    <div>
      <h2>Invoices</h2>
      <ul>
        <li>
          <Link to="amaze">
            <button>Invoice amaze</button>
          </Link>{" "}
        </li>
        <li>
          <Link to="75">Invoice 75</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};
const InvoicesIndex = () => {
  return (
    <div>
      This is the entry page for the invoices. Type a number after the url to
      get a specific invoice
    </div>
  );
};

export default App;
