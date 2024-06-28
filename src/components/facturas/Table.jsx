import React, { useState, useEffect } from "react";
import Loader from "../modules/Loader.jsx";
import Pagination from "react-bootstrap/Pagination";
import Table from "react-bootstrap/Table";
import { useQuery } from "@apollo/client";
import {
  GET_FACTURAS,
  GET_ACREDEROR_DEUDOR,
  GET_ABONO,
  GET_MERCANCIA,
} from "../../functions/graphQLMethods.jsx";

const FacturasTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedItems, setPaginatedItems] = useState([]);
  const itemsPerPage = 10;
  const { loading, error, data } = useQuery(GET_FACTURAS);

  useEffect(() => {
    console.log("Loading:", loading);
    console.log("Error:", error);
    console.log("Data:", data);

    if (!loading && data && data.allFacturas) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const slicedItems = data.allFacturas.slice(startIndex, endIndex);
      setPaginatedItems(slicedItems);
    }
  }, [currentPage, data, loading, itemsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  const totalPages =
    data && data.allFacturas
      ? Math.ceil(data.allFacturas.length / itemsPerPage)
      : 0;

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>ID Deudor</th>
            <th>ID Acreedor</th>
            <th>CUFE</th>
            <th>Número Factura</th>
            <th>Fecha Emision</th>
            <th>Fecha Vencimiento</th>
            <th>Fecha Remision Factura</th>
            <th>fecha Recepcion Factura</th>
          </tr>
        </thead>
        <tbody>
          {paginatedItems.map((item, index) => (
            <tr key={`tT${index}`}>
              <td>{item.id_facturas}</td>
              <td>{item.id_deudor}</td>
              <td>{item.id_acreedor}</td>
              <td>{item.cufe}</td>
              <td>{item.numero_factura}</td>
              <td>{item.fecha_emision}</td>
              <td>{item.fecha_vencimiento}</td>
              <td>{item.fecha_remision_factura}</td>
              <td>{item.fecha_recepcion_factura}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
};

export default FacturasTable;
