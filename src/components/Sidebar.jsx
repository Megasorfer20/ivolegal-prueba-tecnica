import React from "react";
import { Link } from "react-router-dom";
import { getPath } from "../functions/getPath.jsx";
import {
  FaHome,
  FaMoneyBillWave,
  FaUsers,
  FaFileInvoice,
  FaBoxes,
} from "react-icons/fa";
import "../styles/sidebar.css"; 

const Sidebar = () => {
  const path = getPath();

  return (
    <div className="sidebar-static">
      <nav className="sidebar-expand">
        <ul>
          <li className="navbar-styles"></li>
          <li className={path === "/" ? "activeSection" : ""}>
            <Link to="/">
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li className={path === "/abonos" ? "activeSection" : ""}>
            <Link to="/Abonos">
              <FaMoneyBillWave />
              <span>Abonos</span>
            </Link>
          </li>
          <li className={path === "/acrededores" ? "activeSection" : ""}>
            <Link to="/Acrededores">
              <FaUsers />
              <span>Acrededores</span>
            </Link>
          </li>
          <li className={path === "/deudores" ? "activeSection" : ""}>
            <Link to="/Deudores">
              <FaUsers />
              <span>Deudores</span>
            </Link>
          </li>
          <li className={path === "/facturas" ? "activeSection" : ""}>
            <Link to="/Facturas">
              <FaFileInvoice />
              <span>Facturas</span>
            </Link>
          </li>
          <li className={path === "/mercancias" ? "activeSection" : ""}>
            <Link to="/Mercancias">
              <FaBoxes />
              <span>Mercancias</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
