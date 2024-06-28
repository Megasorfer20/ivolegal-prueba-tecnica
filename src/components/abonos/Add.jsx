import React, { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Loader from "../modules/Loader.jsx";
import {
  GET_ACREDEROR_DEUDOR,
  POST_ABONO,
} from "../../functions/graphQLMethods.jsx";

function AddAbono() {
  const [show, setShow] = useState(false);

  const { loading, error, data } = useQuery(GET_ACREDEROR_DEUDOR);

  const [mutate] = useMutation(POST_ABONO);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const postElement = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);
      const variables = {
        id_acreedor: parseInt(formData.get("idAcreedor")),
        fecha_abono: formData.get("fechaAbono"),
        valor_abono: parseInt(formData.get("valorAbono")),
        id_deudor: parseInt(formData.get("idDeudor")),
      };

      const { data } = await mutate({ variables: variables });
      console.log("Abono creado:", data);
      handleClose();
    } catch (error) {
      console.error("Error creando abono:", error);
    }
  };

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Añadir Nuevo Abono
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Abono</Modal.Title>
        </Modal.Header>
        <Form onSubmit={postElement}>
          <Modal.Body>
            <Form.Label htmlFor="idAcreedor">Acrededor</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="idAcreedor"
              id="idAcreedor"
            >
              <option>Selecciona una opción</option>
              {data.allAcrededores.map((e) => (
                <option value={e.id_acreedor} key={`aA${e.id_acreedor}`}>
                  {e.Interviniente_id}
                </option>
              ))}
            </Form.Select>

            <Form.Label htmlFor="fechaAbono">Fecha de Abono</Form.Label>
            <Form.Control
              type="date"
              name="fechaAbono"
              id="fechaAbono"
              placeholder="Fecha de Abono"
            />

            <Form.Label htmlFor="valorAbono">Valor del Abono</Form.Label>
            <Form.Control
              type="number"
              name="valorAbono"
              id="valorAbono"
              placeholder="Valor del Abono"
            />

            <Form.Label htmlFor="idDeudor">Deudor</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="idDeudor"
              id="idDeudor"
            >
              <option>Selecciona una opción</option>
              {data.allDeudores.map((e) => (
                <option value={e.id_deudor} key={`dD${e.id_deudor}`}>
                  {e.Interviniente_id}
                </option>
              ))}
            </Form.Select>
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

export default AddAbono;
