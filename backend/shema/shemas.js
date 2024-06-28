const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const {
  CREATE_ABONO,
  DELETE_ABONO,
  UPDATE_ABONO,
} = require("./mutations/Abonos.js");
const {
  CREATE_DEUDOR,
  DELETE_DEUDOR,
  UPDATE_DEUDOR,
} = require("./mutations/Deudores.js");
const {
  CREATE_ACREDEDOR,
  DELETE_ACREDEDOR,
  UPDATE_ACREDEDOR,
} = require("./mutations/Acrededores.js");
const {
  CREATE_MERCANCIAS,
  DELETE_MERCANCIAS,
  UPDATE_MERCANCIAS,
} = require("./mutations/Mercancias.js");
const {
  CREATE_FACTURAS,
  DELETE_FACTURAS,
  UPDATE_FACTURAS,
} = require("./mutations/Facturas.js");
const { GET_ALL_ABONO, GET_ABONO } = require("./queries/Abonos.js");
const {
  GET_ALL_ACREDEDOR,
  GET_ACREDEDOR,
} = require("./queries/Acrededores.js");
const { GET_ALL_DEUDOR, GET_DEUDOR } = require("./queries/Deudores.js");
const { GET_ALL_FACTURAS, GET_FACTURAS } = require("./queries/Facturas.js");
const {
  GET_ALL_MERCANCIAS,
  GET_MERCANCIAS,
} = require("./queries/Mercancias.js");

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    allAbonos: GET_ALL_ABONO,
    allAcrededores: GET_ALL_ACREDEDOR,
    allDeudores: GET_ALL_DEUDOR,
    allFacturas: GET_ALL_FACTURAS,
    allMercancia: GET_ALL_MERCANCIAS,

    oneAbonos: GET_ABONO,
    oneAcrededores: GET_ACREDEDOR,
    oneDeudores: GET_DEUDOR,
    oneFacturas: GET_FACTURAS,
    oneMercancia: GET_MERCANCIAS,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createAbonos: CREATE_ABONO,
    createAcrededores: CREATE_ACREDEDOR,
    createDeudores: CREATE_DEUDOR,
    createFacturas: CREATE_FACTURAS,
    createMercancia: CREATE_MERCANCIAS,

    deleteAbonos: DELETE_ABONO,
    deleteAcrededores: DELETE_ACREDEDOR,
    deleteDeudores: DELETE_DEUDOR,
    deleteFacturas: DELETE_FACTURAS,
    deleteMercancia: DELETE_MERCANCIAS,

    updateAbonos: UPDATE_ABONO,
    updateAcrededores: UPDATE_ACREDEDOR,
    updateDeudores: UPDATE_DEUDOR,
    updateFacturas: UPDATE_FACTURAS,
    updateMercancia: UPDATE_MERCANCIAS,
  },
});

const queryShema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

module.exports = queryShema;
