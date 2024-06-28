import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Loader from "../modules/Loader.jsx";
import cufeGenerator from "../../functions/generateCufe.jsx";
import {
  validateFechaEmision,
  validateFechaVencimiento,
  validateFechaRemision,
  validateFechaRecepcion,
} from "../../functions/dateValidations.jsx";
import {
  GET_ACREDEROR_DEUDOR,
  POST_FACTURA,
} from "../../functions/graphQLMethods.jsx";

function AddFacturas() {
  const [show, setShow] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const { loading, error, data } = useQuery(GET_ACREDEROR_DEUDOR);

  const [mutate] = useMutation(POST_FACTURA);

  const handleClose = () => {
    setShow(false);
    setFormErrors({});
  };

  const handleShow = () => setShow(true);

  const postElement = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);
      const variables = {
        id_acreedor: parseInt(formData.get("idAcreedor")),
        fecha_emision: formData.get("fechaEmision"),
        fecha_vencimiento: formData.get("fechaVencimiento"),
        fecha_remision_factura: formData.get("fechaRemision"),
        numero_factura: formData.get("numeroFactura"),
        fecha_recepcion_factura: formData.get("fechaRecepcion"),
        id_deudor: parseInt(formData.get("idDeudor")),
        cufe: await cufeGenerator(formData.get("numeroFactura")),
      };

      const errors = {
        fecha_emision: validateFechaEmision(variables.fecha_emision),
        fecha_vencimiento: validateFechaVencimiento(
          variables.fecha_vencimiento
        ),
        fecha_remision_factura: validateFechaRemision(
          variables.fecha_remision_factura
        ),
        fecha_recepcion_factura: validateFechaRecepcion(
          variables.fecha_recepcion_factura
        ),
      };

      if (Object.values(errors).some((error) => error !== null)) {
        setFormErrors(errors);
        return;
      }

      const { data } = await mutate({ variables: variables });
      console.log("Factura creada:", data);
      handleClose();
    } catch (error) {
      console.error("Error creando factura:", error);
    }
  };

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Añadir Nueva Factura
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Nueva Factura</Modal.Title>
        </Modal.Header>
        <Form onSubmit={postElement}>
          <Modal.Body>
            <Form.Label htmlFor="idAcreedor">Acrededor</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="idAcreedor"
              id="idAcreedor"
              defaultValue=""
            >
              <option value="">Selecciona una opción</option>
              {data && data.allAcrededores ? (
                data.allAcrededores.map((e) => (
                  <option value={e.id_acreedor} key={`aA${e.id_acreedor}`}>
                    {e.Interviniente_id}
                  </option>
                ))
              ) : (
                <option value="" disabled>
                  Cargando...
                </option>
              )}
            </Form.Select>
            {formErrors.fecha_emision && (
              <Form.Text className="text-danger">
                {formErrors.fecha_emision}
              </Form.Text>
            )}

            <Form.Label htmlFor="fechaEmision">Fecha de Emisión</Form.Label>
            <Form.Control
              type="date"
              name="fechaEmision"
              id="fechaEmision"
              placeholder="Fecha de Emisión"
            />

            <Form.Label htmlFor="fechaVencimiento">
              Fecha de Vencimiento
            </Form.Label>
            <Form.Control
              type="date"
              name="fechaVencimiento"
              id="fechaVencimiento"
              placeholder="Fecha de Vencimiento"
            />

            <Form.Label htmlFor="fechaRemision">Fecha de Remisión</Form.Label>
            <Form.Control
              type="date"
              name="fechaRemision"
              id="fechaRemision"
              placeholder="Fecha de Remisión"
            />

            <Form.Label htmlFor="fechaRecepcion">Fecha de Recepción</Form.Label>
            <Form.Control
              type="date"
              name="fechaRecepcion"
              id="fechaRecepcion"
              placeholder="Fecha de Recepción"
            />

            <Form.Label htmlFor="numeroFactura">Número de Factura</Form.Label>
            <Form.Control
              type="text"
              name="numeroFactura"
              id="numeroFactura"
              placeholder="Número de Factura"
            />

            <Form.Label htmlFor="idDeudor">Deudor</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="idDeudor"
              id="idDeudor"
              defaultValue=""
            >
              <option value="">Selecciona una opción</option>
              {data && data.allDeudores ? (
                data.allDeudores.map((e) => (
                  <option value={e.id_deudor} key={`dD${e.id_deudor}`}>
                    {e.Interviniente_id}
                  </option>
                ))
              ) : (
                <option value="" disabled>
                  Cargando...
                </option>
              )}
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

export default AddFacturas;
