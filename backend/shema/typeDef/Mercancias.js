const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = require("graphql");

const MercanciasType = new GraphQLObjectType({
  name: "mercancias",
  description: "Mercancias Type Definition",
  fields: () => ({
    id_mercancia: { type: GraphQLID },
    id_facturas: { type: GraphQLInt },
    fecha_recepcion_mercancia: { type: GraphQLString },
    url_soporte_recepcion_mercancia: { type: GraphQLString },
    concepto: { type: GraphQLString },
    valor: { type: GraphQLString },
    IVA: { type: GraphQLInt },
  }),
});

module.exports = MercanciasType;
