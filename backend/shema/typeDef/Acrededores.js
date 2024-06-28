const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");

const AcrededoresType = new GraphQLObjectType({
  name: "acreedores",
  description: "Acrededores Type Definition",
  fields: () => ({
    id_acreedor: { type: GraphQLID },
    Interviniente_id: { type: GraphQLString },
  }),
});

module.exports = AcrededoresType;
