import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          {" "}
          <Link className ="btn" style={{
                  paddingLeft: "2.5rem",
                  paddingRight: "2.5rem",
                  backgroundColor: "#5AE4A8",
                  color: "white",
                }} to="/Registrate">Registrate</Link>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
