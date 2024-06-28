const {
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInputObjectType,
} = require("graphql");
const AbonosType = require("../typeDef/Abonos.js");
const models = require("../../database/databaseConection.js");
const MessageType = require("../typeDef/Message.js");

const CREATE_ABONO = {
  type: AbonosType,
  args: {
    id_acreedor: { type: GraphQLInt },
    fecha_abono: { type: GraphQLString },
    valor_abono: { type: GraphQLInt },
    id_deudor: { type: GraphQLInt },
  },
  async resolve(parent, args) {
    const response = await models.abonos.create(args);
    return response.dataValues;
  },
};

const DELETE_ABONO = {
  type: GraphQLBoolean,
  args: {
    id_abono: { type: GraphQLID },
  },
  async resolve(parent, args) {
    const { id_abono } = args;
    const result = await models.abonos.destroy({
      where: { id_abono: id_abono },
    });
    if (result === 1) return true;
    return false;
  },
};

const UPDATE_ABONO = {
  type: MessageType,
  args: {
    id_abono: { type: GraphQLID },
    data: {
      type: new GraphQLInputObjectType({
        name: "AbonoInput",
        fields: () => ({
          id_acreedor: { type: GraphQLInt },
          fecha_abono: { type: GraphQLString },
          valor_abono: { type: GraphQLInt },
          id_deudor: { type: GraphQLInt },
        }),
      }),
    },
  },
  async resolve(parent, args) {
    const { id_abono, data } = args;
    const updatedRowsCount = await models.abonos.update(data, {
      where: {
        id_abono: id_abono,
      },
      returning: true,
    });

    if (updatedRowsCount[1] === 0)
      return {
        success: false,
        message: "No se pudo realizar la actauización",
        data: null,
      };

    const updatedResult = await models.abonos.findByPk(id_abono);

    return {
      success: true,
      message: "Objeto actualizado correctamente",
      data: updatedResult,
    };
  },
};

module.exports = { CREATE_ABONO, DELETE_ABONO, UPDATE_ABONO };
