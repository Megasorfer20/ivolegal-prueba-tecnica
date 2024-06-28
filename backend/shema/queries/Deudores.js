const { GraphQLList, GraphQLID } = require("graphql");
const models = require("../../database/databaseConection.js");
const DeudoresType = require("../typeDef/Deudores.js");

const GET_ALL_DEUDOR = {
  type: new GraphQLList(DeudoresType),
  resolve() {
    return models.deudores.findAll();
  },
};

const GET_DEUDOR = {
  type: DeudoresType,
  args: {
    id_deudor: { type: GraphQLID },
  },
  resolve(_, args) {
    const { id_deudor } = args;
    return models.deudores.findByPk(id_deudor);
  },
};

module.exports = { GET_ALL_DEUDOR, GET_DEUDOR };
