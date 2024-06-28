import React from "react";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<div>/</div>} />
      <Route path="abonos" element={<div>/abonos</div>} />
      <Route path="acrededores" element={<div>/acrededores</div>} />
      <Route path="deudores" element={<div>/deudores</div>} />
      <Route path="facturas" element={<div>/facturas</div>} />
      <Route path="mercancias" element={<div>/mercancias</div>} />
    </Routes>
  );
};

export default Router;
