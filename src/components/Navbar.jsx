import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineCreditCard, AiOutlineUser } from "react-icons/ai";
import { FaWarehouse } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";

import "../styles/navbar.css"; 

const MainNavbar = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar mb-3">
          <Container fluid>
            <Navbar.Brand>GESTOR DE FACTURACIÓN</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/" className="nav-link">
                    <AiFillHome />
                    <span>Home</span>
                  </Link>

                  <Link to="/Abonos" className="nav-link">
                    <MdOutlinePayment />
                    <span>Abonos</span>
                  </Link>

                  <Link to="/Acrededores" className="nav-link">
                    <AiOutlineCreditCard />
                    <span>Acrededores</span>
                  </Link>

                  <Link to="/Deudores" className="nav-link">
                    <AiOutlineUser />
                    <span>Deudores</span>
                  </Link>

                  <Link to="/Facturas" className="nav-link">
                    <FaWarehouse />
                    <span>Facturas</span>
                  </Link>

                  <Link to="/Mercancias" className="nav-link">
                    <FaWarehouse />
                    <span>Mercancias</span>
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default MainNavbar;
