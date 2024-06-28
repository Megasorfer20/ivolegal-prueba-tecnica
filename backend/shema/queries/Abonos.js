const { GraphQLList, GraphQLID } = require("graphql");
const models = require("../../database/databaseConection.js");
const AbonosType = require("../typeDef/Abonos.js");

const GET_ALL_ABONO = {
  type: new GraphQLList(AbonosType),
  resolve() {
    return models.abonos.findAll();
  },
};

const GET_ABONO = {
  type: AbonosType,
  args: {
    id_abono: { type: GraphQLID },
  },
  resolve(_, args) {
    const {id_abono} = args
    return models.abonos.findByPk(id_abono);
  },
};

module.exports = { GET_ALL_ABONO, GET_ABONO };
