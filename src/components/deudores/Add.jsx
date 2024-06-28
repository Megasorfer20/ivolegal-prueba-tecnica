import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { POST_DEUDOR } from "../../functions/graphQLMethods.jsx";

function AddAcrededor() {
  const [show, setShow] = useState(false);

  const [mutate] = useMutation(POST_DEUDOR);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const postElement = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);
      const variables = {
        id_deudor: "",
        Interviniente_id: formData.get("IntervinienteId"),
      };
      const { data } = await mutate({ variables: variables });
      console.log("Deudor creado:", data);
      handleClose();
    } catch (error) {
      console.error("Error creando Deudor:", error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Añadir Nuevo Deudor
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Deudor</Modal.Title>
        </Modal.Header>
        <Form onSubmit={postElement}>
          <Modal.Body>
            <Form.Label htmlFor="IntervinienteId">Interviniente</Form.Label>
            <Form.Control
              type="text"
              name="IntervinienteId"
              id="IntervinienteId"
              placeholder="Interviniente"
            />
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

export default AddAcrededor;
