const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = require("graphql");

const AbonosType = new GraphQLObjectType({
  name: "abonos",
  description: "Abonos Type Definition",
  fields: () => ({
    id_abono: { type: GraphQLID },
    id_acreedor: { type: GraphQLInt },
    fecha_abono: { type: GraphQLString },
    valor_abono: { type: GraphQLInt },
    id_deudor: { type: GraphQLInt },
  }),
});

module.exports = AbonosType;
