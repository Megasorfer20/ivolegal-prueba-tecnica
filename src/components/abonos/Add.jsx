import React, { useState, useEffect } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Loader from "../modules/Loader.jsx";

const GET_ACREDEROR_DEUDOR = gql`
  query {
    allDeudores {
      id_deudor
      Interviniente_id
    }
    allAcrededores {
      id_acreedor
      Interviniente_id
    }
  }
`;
const POST_ABONO = gql`
  mutation createAbonos(
    $id_acreedor: Int!
    $fecha_abono: String!
    $valor_abono: Int!
    $id_deudor: Int!
  ) {
    createAbonos(
      id_acreedor: $id_acreedor
      fecha_abono: $fecha_abono
      valor_abono: $valor_abono
      id_deudor: $id_deudor
    ) {
      abonos {
        id_abono
        id_acreedor
        fecha_abono
        valor_abono
        id_deudor
      }
    }
  }
`;

function AddAbono() {
  const [show, setShow] = useState(false);
  const [fetchData, setFetchData] = useState({});

  const { loading, error, data } = useQuery(GET_ACREDEROR_DEUDOR);

  const [mutate, { loading: mutationLoading, error: mutationError }] =
    useMutation(POST_ABONO);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const postElement = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const variables = {
      id_acreedor: parseInt(formData.get("idAcreedor")),
      fecha_abono: formData.get("fechaAbono"),
      valor_abono: parseInt(formData.get("valorAbono")),
      id_deudor: parseInt(formData.get("idDeudor")),
    };

    console.log("Variables de la mutación:", variables);
    try {
      const { data } = await mutate({ variables });
      console.log("Abono creado:", data);
      handleClose();
    } catch (error) {
      console.error("Error creando abono:", error);
    }
  };

  useEffect(() => {
    if (data) {
      setFetchData(data);
      console.log(fetchData);
    }
  }, [data]);

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
