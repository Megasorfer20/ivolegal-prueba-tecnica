const { GraphQLList, GraphQLID } = require("graphql");
const models = require("../../database/databaseConection.js");
const AcrededoresType = require("../typeDef/Acrededores.js");

const GET_ALL_ACREDEDOR = {
  type: new GraphQLList(AcrededoresType),
  resolve() {
    return models.acreedores.findAll();
  },
};

const GET_ACREDEDOR = {
  type: AcrededoresType,
  args: {
    id_acreedor: { type: GraphQLID },
  },
  resolve(_, args) {
    const { id_acreedor } = args;
    return models.acreedores.findByPk(id_acreedor);
  },
};

module.exports = { GET_ALL_ACREDEDOR, GET_ACREDEDOR };
