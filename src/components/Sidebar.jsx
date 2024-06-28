import React from "react";
import { Link } from "react-router-dom";
import { getPath } from "../functions/getPath.jsx";

const Sidebar = () => {
  const path = getPath();

  return (
    <div className="sidebar-static">
      <nav className="sidebar-expand">
        <ul>
          <li className="navbar-styles"></li>
          <li className={path === "/" ? "activeSection" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={path === "/abonos" ? "activeSection" : ""}>
            <Link to="/abonos">Abonos</Link>
          </li>
          <li className={path === "/acrededores" ? "activeSection" : ""}>
            <Link to="/acrededores">Acrededores</Link>
          </li>
          <li className={path === "/deudores" ? "activeSection" : ""}>
            <Link to="/deudores">Deudores</Link>
          </li>
          <li className={path === "/facturas" ? "activeSection" : ""}>
            <Link to="/facturas">Facturas</Link>
          </li>
          <li className={path === "/mercancias" ? "activeSection" : ""}>
            <Link to="/mercancias">Mercancias</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
