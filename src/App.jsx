import { useContext } from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import TrackerList from "./components/TrackerList/TrackerList";
import routeCtx from "./context/routerHandler/route";
import Info from "./components/Info/Info";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { changeRoute, route } = useContext(routeCtx);
  return (
    <>
      <ToastContainer />
      <Nav changeRoute={changeRoute} />
      {route === "header" ? (
        <Header />
      ) : route === "context" ? (
        <Info />
      ) : (
        <TrackerList changeRoute={changeRoute} />
      )}
    </>
  );
}
export default App;
