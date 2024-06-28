import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';

function AddDeudor() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const postElement = (e) => {
    e.preventDefault();
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
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Form onSubmit={postElement}>
          <Modal.Body></Modal.Body>
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

export default AddDeudor;
