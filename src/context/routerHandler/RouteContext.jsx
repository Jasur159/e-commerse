import { useState } from "react";
import routeCtx from "./route";
const RouteContext = ({ children }) => {
  const [route, setRoute] = useState("header");
  const changeRoute = (value) => setRoute(value);
  return <routeCtx.Provider value={{changeRoute,route}}>{children}</routeCtx.Provider>;
};

export default RouteContext;
