import React from "react";
import AddAbono from "./abonos/Add.jsx";
import AddAcrededor from "./acreedores/Add.jsx";
import AddDeudor from "./deudores/Add.jsx";
import AddFacturas from "./facturas/Add.jsx";
import AddMercancia from "./mercancia/Add.jsx";

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
            </div>
          )}
          {path === "Acrededores" && (
            <div>
              <AddAcrededor />
            </div>
          )}
          {path === "Deudores" && (
            <div>
              <AddDeudor />
            </div>
          )}
          {path === "Facturas" && (
            <div>
              <AddFacturas />
            </div>
          )}
          {path === "Mercancias" && (
            <div>
              <AddMercancia />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Sections;
