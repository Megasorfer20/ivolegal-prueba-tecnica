import React, { useState, useEffect } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Loader from "../modules/Loader.jsx";
import {
  GET_FACTURAS,
  POST_MERCANCIA,
} from "../../functions/graphQLMethods.jsx";

function AddMercancia() {
  const [show, setShow] = useState(false);

  const { loading, error, data } = useQuery(GET_FACTURAS);

  const [mutate] = useMutation(POST_MERCANCIA);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const postElement = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);
      const variables = {
        id_facturas: parseInt(formData.get("id_facturas")),
        fecha_recepcion_mercancia: formData.get("fecha_recepcion_mercancia"),
        url_soporte_recepcion_mercancia: "http://fakeUrl.com",
        concepto: formData.get("concepto"),
        valor: String(formData.get("valor")),
        IVA: parseInt(19),
      };

      console.log("Variables de la mutación:", variables);

      const { data } = await mutate({ variables: variables });
      console.log("Mercancia creado:", data);
      handleClose();
    } catch (error) {
      console.error("Error creando Mercancia:", error);
    }
  };

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Añadir Nueva Mercancia
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Nueva Mercancia</Modal.Title>
        </Modal.Header>
        <Form onSubmit={postElement}>
          <Modal.Body>
            <Form.Label htmlFor="id_facturas">Factura</Form.Label>
            <Form.Select
              aria-label="Factura"
              name="id_facturas"
              id="id_facturas"
            >
              <option>Selecciona una factura</option>
              {data.allFacturas.map((factura) => (
                <option
                  key={`fF${factura.id_facturas}`}
                  value={factura.id_facturas}
                >
                  {factura.numero_factura}
                </option>
              ))}
            </Form.Select>

            <Form.Group controlId="fecha_recepcion_mercancia">
              <Form.Label>Fecha de Recepción de Mercancía</Form.Label>
              <Form.Control
                type="date"
                name="fecha_recepcion_mercancia"
                required
              />
            </Form.Group>

            <Form.Group controlId="concepto">
              <Form.Label>Concepto</Form.Label>
              <Form.Control
                type="text"
                name="concepto"
                placeholder="Ingrese el concepto de la mercancía"
                required
              />
            </Form.Group>

            <Form.Group controlId="valor">
              <Form.Label>Valor</Form.Label>
              <Form.Control
                type="text"
                name="valor"
                placeholder="Ingrese el valor de la mercancía"
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" type="submit">
              Añadir
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddMercancia;
