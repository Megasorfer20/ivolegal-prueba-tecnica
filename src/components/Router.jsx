import React from "react";
import { Routes, Route } from "react-router-dom";
import { getPath } from "../functions/getPath.jsx";
import Sections from "./Sections.jsx";

const Router = () => {
  const path = getPath();
  return (
    <Routes>
      <Route path="/" element={<Sections path={path} />} />
      <Route path="Abonos" element={<Sections path={path} />} />
      <Route path="Acrededores" element={<Sections path={path} />} />
      <Route path="Deudores" element={<Sections path={path} />} />
      <Route path="Facturas" element={<Sections path={path} />} />
      <Route path="Mercancias" element={<Sections path={path} />} />
    </Routes>
  );
};

export default Router;
