import React from "react";
import { Link, Router } from "@reach/router";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>
      </nav>
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

const Invoices = ({ children, navigate }) => {
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
      <form
        onSubmit={event => {
          event.preventDefault();
          console.log(event.target.elements[0].value);
          const id = event.target.elements[0].value;
          event.target.reset();
          navigate(id);
        }}
      >
        <p>
          <label>
            New Invoice ID:
            <input type="text" name="invId" />
          </label>
          <button type="submit">Create new invoice</button>
        </p>
      </form>
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

const NotFound = () => {
  return (
    <div>
      Oops, looks like there is nothing here. Do you have the correct url?
    </div>
  );
};

export default App;
