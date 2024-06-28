import React from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Router from "./components/Router.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

import "./styles/index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Navbar />
      <Router />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
