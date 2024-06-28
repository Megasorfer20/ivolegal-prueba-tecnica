import React from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Router from "./components/Router.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Router />
    </BrowserRouter>
  );
};

export default App;
