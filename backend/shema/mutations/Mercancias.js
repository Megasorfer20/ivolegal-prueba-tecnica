const {
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLInputObjectType,
} = require("graphql");
const MercanciasType = require("../typeDef/Mercancias.js");
const models = require("../../database/databaseConection.js");
const MessageType = require("../typeDef/Message.js");

const CREATE_MERCANCIAS = {
  type: MercanciasType,
  args: {
    id_mercancia: { type: GraphQLID },
    id_facturas: { type: GraphQLInt },
    fecha_recepcion_mercancia: { type: GraphQLString },
    url_soporte_recepcion_mercancia: { type: GraphQLString },
    concepto: { type: GraphQLString },
    valor: { type: GraphQLString },
    IVA: { type: GraphQLInt },
  },
  async resolve(parent, args) {
    const response = await models.mercancias.create(args);
    return response.dataValues;
  },
};

const DELETE_MERCANCIAS = {
  type: GraphQLBoolean,
  args: {
    id_mercancia: { type: GraphQLID },
  },
  resolve(parent, args) {
    const { id_mercancia } = args;
    const result = models.mercancias.destroy({
      where: { id_mercancia: id_mercancia },
    });
    if (result === 1) return true;
    return false;
  },
};

const UPDATE_MERCANCIAS = {
  type: MessageType,
  args: {
    id_mercancia: { type: GraphQLID },
    data: {
      type: new GraphQLInputObjectType({
        name: "MercanciaInput",
        fields: () => ({
          id_mercancia: { type: GraphQLID },
          id_facturas: { type: GraphQLInt },
          fecha_recepcion_mercancia: { type: GraphQLString },
          url_soporte_recepcion_mercancia: { type: GraphQLString },
          concepto: { type: GraphQLString },
          valor: { type: GraphQLString },
          IVA: { type: GraphQLInt },
        }),
      }),
    },
  },
  async resolve(parent, args) {
    const { id_mercancia, data } = args;
    const updatedRowsCount = await models.mercancias.update(data, {
      where: {
        id_mercancia: id_mercancia,
      },
      returning: true,
    });

    if (updatedRowsCount[1] === 0)
      return {
        success: false,
        message: "No se pudo realizar la actauización",
        data: null,
      };

    const updatedResult = await models.mercancias.findByPk(id_mercancia);

    return {
      success: true,
      message: "Objeto actualizado correctamente",
      data: updatedResult,
    };
  },
};

module.exports = { CREATE_MERCANCIAS, DELETE_MERCANCIAS, UPDATE_MERCANCIAS };
