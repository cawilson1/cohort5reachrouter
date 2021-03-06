import React, { useState } from "react";

import Navbar from "./components/Navbar";
import AllRoutes from "./components/AllRoutes";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <div>
      <Navbar setSignedIn={setSignedIn} signedIn={signedIn} />
      <AllRoutes signedIn={signedIn} />
    </div>
  );
}

export default App;
