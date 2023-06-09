import "./App.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ROUTES } from "./main";

const App = () => {
  return (
    <>
      <h1
        style={{
          top: 0,
          color: "#919191",
          margin: "40px",
          position: "absolute",
        }}
      >
        Minutetag Challenge
      </h1>

      <div
        style={{
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {ROUTES.map((route) => (
          <NavLink
            to={route}
            style={({ isActive }) => {
              return {
                boxShadow: isActive
                  ? "0px 0px 10px 1px rgba(145,145,145,1)"
                  : "none",
                "-webkit-box-shadow": isActive
                  ? "0px 0px 10px 1px rgba(145,145,145,1)"
                  : "none",
                "-moz-box-shadow": isActive
                  ? "0px 0px 10px 1px rgba(145,145,145,1)"
                  : "none",
              };
            }}
          >
            {route}
          </NavLink>
        ))}
      </div>

      <div
        style={{
          width: "100%",
          padding: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default App;
