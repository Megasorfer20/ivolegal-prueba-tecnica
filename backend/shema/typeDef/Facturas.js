const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = require("graphql");

const FacturasType = new GraphQLObjectType({
  name: "facturas",
  description: "Facturas Type Definition",
  fields: () => ({
    id_facturas: { type: GraphQLID },
    cufe: { type: GraphQLString },
    numero_factura: { type: GraphQLString },
    fecha_emision: { type: GraphQLString },
    fecha_vencimiento: { type: GraphQLString },
    fecha_remision_factura: { type: GraphQLString },
    id_acreedor: { type: GraphQLInt },
    id_deudor: { type: GraphQLInt },
    fecha_recepcion_factura: { type: GraphQLString },
  }),
});

module.exports = FacturasType;
