const { GraphQLList, GraphQLID } = require("graphql");
const models = require("../../database/databaseConection.js");
const FacturasType = require("../typeDef/Facturas.js");

const GET_ALL_FACTURAS = {
  type: new GraphQLList(FacturasType),
  resolve() {
    return models.facturas.findAll();
  },
};

const GET_FACTURAS = {
  type: FacturasType,
  args: {
    id_facturas: { type: GraphQLID },
  },
  resolve(_, args) {
    const { id_facturas } = args;
    return models.facturas.findByPk(id_facturas);
  },
};

module.exports = { GET_ALL_FACTURAS, GET_FACTURAS };
