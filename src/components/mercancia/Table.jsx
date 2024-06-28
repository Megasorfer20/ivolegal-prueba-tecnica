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

const MercanciaTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedItems, setPaginatedItems] = useState([]);
  const itemsPerPage = 10;
  const { loading, error, data } = useQuery(GET_MERCANCIA);

  useEffect(() => {
    console.log("Loading:", loading);
    console.log("Error:", error);
    console.log("Data:", data);

    if (!loading && data && data.allMercancia) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const slicedItems = data.allMercancia.slice(startIndex, endIndex);
      setPaginatedItems(slicedItems);
    }
  }, [currentPage, data, loading, itemsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  const totalPages =
    data && data.allMercancia
      ? Math.ceil(data.allMercancia.length / itemsPerPage)
      : 0;

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>ID Facturas</th>
            <th>Fecha Recepción</th>
            <th>URL Soporte</th>
            <th>Concepto</th>
            <th>Valor</th>
            <th>IVA</th>
          </tr>
        </thead>
        <tbody>
          {paginatedItems.map((item, index) => (
            <tr key={`tT${index}`}>
              <td>{item.id_mercancia}</td>
              <td>{item.id_facturas}</td>
              <td>{item.fecha_recepcion_mercancia}</td>
              <td>{item.url_soporte_recepcion_mercancia}</td>
              <td>{item.concepto}</td>
              <td>{item.valor}</td>
              <td>{item.IVA}</td>
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

export default MercanciaTable;
