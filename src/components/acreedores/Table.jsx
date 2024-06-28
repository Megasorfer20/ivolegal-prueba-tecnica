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

const AcrededoresTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedItems, setPaginatedItems] = useState([]);
  const itemsPerPage = 5;
  const { loading, error, data } = useQuery(GET_ACREDEROR_DEUDOR);

  useEffect(() => {
    console.log("Loading:", loading);
    console.log("Error:", error);
    console.log("Data:", data);

    if (!loading && data && data.allAcrededores) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const slicedItems = data.allAcrededores.slice(startIndex, endIndex);
      setPaginatedItems(slicedItems);
    }
  }, [currentPage, data, loading, itemsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  const totalPages =
    data && data.allAcrededores
      ? Math.ceil(data.allAcrededores.length / itemsPerPage)
      : 0;

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>ID Interviniente</th>
          </tr>
        </thead>
        <tbody>
          {paginatedItems.map((item, index) => (
            <tr key={`tT${index}`}>
              <td>{item.id_acreedor}</td>
              <td>{item.Interviniente_id}</td>
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

export default AcrededoresTable;
