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

const Sections = ({ path }) => {
  return (
    <div>
      <h1>
        {path === ""
          ? "Selecciona uno de los módulos para contuinuar..."
          : path}
      </h1>
      <hr />
      {path && (
        <div>
          {path === "Abonos" && (
            <div>
              <AddAbono />
              <AbonosTable />
            </div>
          )}
          {path === "Acrededores" && (
            <div>
              <AddAcrededor />
              <AcrededoresTable />
            </div>
          )}
          {path === "Deudores" && (
            <div>
              <AddDeudor />
              <DeudoresTable />
            </div>
          )}
          {path === "Facturas" && (
            <div>
              <AddFacturas />
              <FacturasTable />
            </div>
          )}
          {path === "Mercancias" && (
            <div>
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
