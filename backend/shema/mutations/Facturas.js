const {
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLInputObjectType,
} = require("graphql");
const FacturasType = require("../typeDef/Facturas.js");
const models = require("../../database/databaseConection.js");
const MessageType = require("../typeDef/Message.js");

const CREATE_FACTURAS = {
  type: FacturasType,
  args: {
    cufe: { type: GraphQLString },
    numero_factura: { type: GraphQLString },
    fecha_emision: { type: GraphQLString },
    fecha_vencimiento: { type: GraphQLString },
    fecha_remision_factura: { type: GraphQLString },
    id_acreedor: { type: GraphQLInt },
    id_deudor: { type: GraphQLInt },
    fecha_recepcion_factura: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const response = await models.facturas.create(args);
    return response.dataValues;
  },
};

const DELETE_FACTURAS = {
  type: GraphQLBoolean,
  args: {
    id_facturas: { type: GraphQLID },
  },
  resolve(parent, args) {
    const { id_facturas } = args;
    const result = models.facturas.destroy({
      where: { id_facturas: id_facturas },
    });
    if (result === 1) return true;
    return false;
  },
};

const UPDATE_FACTURAS = {
  type: MessageType,
  args: {
    id_facturas: { type: GraphQLID },
    data: {
      type: new GraphQLInputObjectType({
        name: "FacturaInput",
        fields: () => ({
          cufe: { type: GraphQLString },
          numero_factura: { type: GraphQLString },
          fecha_emision: { type: GraphQLString },
          fecha_vencimiento: { type: GraphQLString },
          fecha_remision_factura: { type: GraphQLString },
          id_acreedor: { type: GraphQLInt },
          id_deudor: { type: GraphQLInt },
          fecha_recepcion_factura: { type: GraphQLString },
        }),
      }),
    },
  },
  async resolve(parent, args) {
    const { id_facturas, data } = args;
    const updatedRowsCount = await models.facturas.update(data, {
      where: {
        id_facturas: id_facturas,
      },
      returning: true,
    });

    if (updatedRowsCount[1] === 0)
      return {
        success: false,
        message: "No se pudo realizar la actauización",
        data: null,
      };

    const updatedResult = await models.facturas.findByPk(id_facturas);

    return {
      success: true,
      message: "Objeto actualizado correctamente",
      data: updatedResult,
    };
  },
};

module.exports = { CREATE_FACTURAS, DELETE_FACTURAS, UPDATE_FACTURAS };
