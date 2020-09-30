import React from "react";
import { Link } from "@reach/router";

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

export default Invoices;
