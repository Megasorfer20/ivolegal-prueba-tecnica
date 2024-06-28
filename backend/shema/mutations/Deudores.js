const {
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInputObjectType,
} = require("graphql");
const DeudoresType = require("../typeDef/Deudores.js");
const models = require("../../database/databaseConection.js");
const MessageType = require("../typeDef/Message.js");

const CREATE_DEUDOR = {
  type: DeudoresType,
  args: {
    Interviniente_id: { type: GraphQLString },
    id_deudor: { type: GraphQLID },
  },
  async resolve(parent, args) {
    const generateId = await models.deudores.findAll();
    const response = await models.deudores.create({
      ...args,
      id_deudor: generateId.length + 1,
    });
    return response.dataValues;
  },
};

const DELETE_DEUDOR = {
  type: GraphQLBoolean,
  args: {
    id_deudor: { type: GraphQLID },
  },
  resolve(parent, args) {
    const { id_deudor } = args;
    const result = models.deudores.destroy({ where: { id_deudor: id_deudor } });
    if (result === 1) return true;
    return false;
  },
};

const UPDATE_DEUDOR = {
  type: MessageType,
  args: {
    id_deudor: { type: GraphQLID },
    data: {
      type: new GraphQLInputObjectType({
        name: "DeudorInput",
        fields: () => ({
          Interviniente_id: { type: GraphQLString },
        }),
      }),
    },
  },
  async resolve(parent, args) {
    const { id_deudor, data } = args;
    const updatedRowsCount = await models.deudores.update(data, {
      where: {
        id_deudor: id_deudor,
      },
      returning: true,
    });

    if (updatedRowsCount[1] === 0)
      return {
        success: false,
        message: "No se pudo realizar la actauización",
        data: null,
      };

    const updatedResult = await models.deudores.findByPk(id_deudor);

    return {
      success: true,
      message: "Objeto actualizado correctamente",
      data: updatedResult,
    };
  },
};

module.exports = { CREATE_DEUDOR, DELETE_DEUDOR, UPDATE_DEUDOR };
