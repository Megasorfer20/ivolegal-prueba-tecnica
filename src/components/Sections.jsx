import React from "react";
import AddAbono from "./abonos/Add.jsx";
import AddAcrededor from "./acreedores/Add.jsx";
import AddDeudor from "./deudores/Add.jsx";
import AddFacturas from "./facturas/Add.jsx";
import AddMercancia from "./mercancia/Add.jsx";
import AbonosTable from "./abonos/Table.jsx";
import AcrededoresTable from "./acreedores/Table.jsx";
import DeudoresTable from "./deudores/Table.jsx";
import FacturasTable from "./facturas/Table.jsx";
import MercanciaTable from "./mercancia/Table.jsx";

import "../styles/sections.css"; 

const Sections = ({ path }) => {
  return (
    <div className="sections-container">
      <h1 className="section-header">
        {path === "" ? "Selecciona uno de los módulos para continuar..." : path}
      </h1>
      <hr />
      {path && (
        <div className="section-content">
          {path === "Abonos" && (
            <div className="section">
              <AddAbono />
              <AbonosTable />
            </div>
          )}
          {path === "Acrededores" && (
            <div className="section">
              <AddAcrededor />
              <AcrededoresTable />
            </div>
          )}
          {path === "Deudores" && (
            <div className="section">
              <AddDeudor />
              <DeudoresTable />
            </div>
          )}
          {path === "Facturas" && (
            <div className="section">
              <AddFacturas />
              <FacturasTable />
            </div>
          )}
          {path === "Mercancias" && (
            <div className="section">
              <AddMercancia />
              <MercanciaTable />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Sections;
