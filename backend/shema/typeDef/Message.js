const { GraphQLBoolean, GraphQLString, GraphQLObjectType, GraphQLUnionType } = require("graphql");
const AbonosType = require("./Abonos.js");
const AcrededoresType = require("./Acrededores.js");
const DeudoresType = require("./Deudores.js");
const FacturasType = require("./Facturas.js");
const MercanciasType = require("./Mercancias.js");


const MessageType = new GraphQLObjectType({
  name: "Message",
  fields: () => ({
    success: { type: GraphQLBoolean },
    message: { type: GraphQLString },
    data: {
      type: new GraphQLUnionType({
        name: "MessageData",
        types: [AbonosType, AcrededoresType, DeudoresType, FacturasType, MercanciasType],
        resolveType(value) {
          if (value.id_abono) {
            return "abonos";
          } else if (value.id_acreedor) {
            return "acreedores";
          } else if (value.id_deudor) {
            return "deudores";
          } else if (value.id_factura) {
            return "facturas";
          } else if (value.id_mercancia) {
            return "mercancias";
          }
          return null;
        },
      }),
    },
  }),
});

module.exports = MessageType;
