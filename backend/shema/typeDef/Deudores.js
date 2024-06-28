const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");

const DeudoresType = new GraphQLObjectType({
  name: "deudores",
  description: "Deudores Type Definition",
  fields: () => ({
    id_deudor: { type: GraphQLID },
    Interviniente_id: { type: GraphQLString },
  }),
});

module.exports = DeudoresType;
