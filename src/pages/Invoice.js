import React from "react";
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

export default Invoice;
