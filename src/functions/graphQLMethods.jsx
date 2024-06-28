import { gql } from "@apollo/client";

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
  mutation createAbono(
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
      id_abono
      id_deudor
      id_acreedor
      valor_abono
      fecha_abono
    }
  }
`;

const POST_ACREDEDOR = gql`
  mutation createAcrededores($Interviniente_id: String!, $id_acreedor: ID!) {
    createAcrededores(
      Interviniente_id: $Interviniente_id
      id_acreedor: $id_acreedor
    ) {
      id_acreedor
      Interviniente_id
    }
  }
`;

const POST_DEUDOR = gql`
  mutation CreateDeudores($Interviniente_id: String!, $id_deudor: ID!) {
    createDeudores(Interviniente_id: $Interviniente_id, id_deudor: $id_deudor) {
      id_deudor
      Interviniente_id
    }
  }
`;

const POST_FACTURA = gql`
  mutation CreateFacturas(
    $cufe: String!
    $numero_factura: String!
    $fecha_emision: String!
    $fecha_vencimiento: String!
    $fecha_remision_factura: String!
    $id_acreedor: Int!
    $id_deudor: Int!
    $fecha_recepcion_factura: String!
  ) {
    createFacturas(
      cufe: $cufe
      numero_factura: $numero_factura
      fecha_emision: $fecha_emision
      fecha_vencimiento: $fecha_vencimiento
      fecha_remision_factura: $fecha_remision_factura
      id_acreedor: $id_acreedor
      id_deudor: $id_deudor
      fecha_recepcion_factura: $fecha_recepcion_factura
    ) {
      id_facturas
      cufe
      numero_factura
      fecha_emision
      fecha_vencimiento
      fecha_remision_factura
      id_acreedor
      id_deudor
      fecha_recepcion_factura
    }
  }
`;

const GET_FACTURAS = gql`
  query {
    allFacturas {
      id_deudor
      id_facturas
      id_acreedor
      fecha_emision
      fecha_vencimiento
      fecha_remision_factura
      fecha_recepcion_factura
      numero_factura
      cufe
    }
  }
`;

const POST_MERCANCIA = gql`
  mutation CreateMercancia(
    $id_facturas: Int
    $fecha_recepcion_mercancia: String
    $url_soporte_recepcion_mercancia: String
    $concepto: String
    $valor: String
    $IVA: Int
  ) {
    createMercancia(
      id_facturas: $id_facturas
      fecha_recepcion_mercancia: $fecha_recepcion_mercancia
      url_soporte_recepcion_mercancia: $url_soporte_recepcion_mercancia
      concepto: $concepto
      valor: $valor
      IVA: $IVA
    ) {
      id_mercancia
      id_facturas
      fecha_recepcion_mercancia
      url_soporte_recepcion_mercancia
      concepto
      valor
      IVA
    }
  }
`;

export {GET_ACREDEROR_DEUDOR,
    POST_ABONO,
    POST_ACREDEDOR,
    POST_DEUDOR,
    POST_FACTURA,
    GET_FACTURAS,
    POST_MERCANCIA};
