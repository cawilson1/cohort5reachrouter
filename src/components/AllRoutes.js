import React from "react";

import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

export default function AllRoutes({ signedIn }) {
  return <>{signedIn ? <PrivateRoutes /> : <PublicRoutes />}</>;
}
