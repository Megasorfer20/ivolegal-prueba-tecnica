const { GraphQLList, GraphQLID } = require("graphql");
const models = require("../../database/databaseConection.js");
const MercanciasType = require("../typeDef/Mercancias.js");

const GET_ALL_MERCANCIAS = {
  type: new GraphQLList(MercanciasType),
  resolve() {
    return models.mercancias.findAll();
  },
};

const GET_MERCANCIAS = {
  type: MercanciasType,
  args: {
    id_mercancia: { type: GraphQLID },
  },
  resolve(_, args) {
    const { id_mercancia } = args;
    return models.mercancias.findByPk(id_mercancia);
  },
};

module.exports = { GET_ALL_MERCANCIAS, GET_MERCANCIAS };
