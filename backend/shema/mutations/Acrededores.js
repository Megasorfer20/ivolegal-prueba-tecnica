const {
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInputObjectType,
} = require("graphql");
const AcrededoresType = require("../typeDef/Acrededores.js");
const models = require("../../database/databaseConection.js");
const MessageType = require("../typeDef/Message.js");

const CREATE_ACREDEDOR = {
  type: AcrededoresType,
  args: {
    Interviniente_id: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const response = await models.acreedores.create(args);
    return response.dataValues;
  },
};

const DELETE_ACREDEDOR = {
  type: GraphQLBoolean,
  args: {
    id_acreedor: { type: GraphQLID },
  },
  resolve(parent, args) {
    const { id_acreedor } = args;
    const result = models.acreedores.destroy({
      where: { id_acreedor: id_acreedor },
    });
    if (result === 1) return true;
    return false;
  },
};

const UPDATE_ACREDEDOR = {
  type: MessageType,
  args: {
    id_acreedor: { type: GraphQLID },
    data: {
      type: new GraphQLInputObjectType({
        name: "AcrededorInput",
        fields: () => ({
          Interviniente_id: { type: GraphQLString },
        }),
      }),
    },
  },
  async resolve(parent, args) {
    const { id_acreedor, data } = args;
    const updatedRowsCount = await models.acreedores.update(data, {
      where: {
        id_acreedor: id_acreedor,
      },
      returning: true,
    });

    if (updatedRowsCount[1] === 0)
      return {
        success: false,
        message: "No se pudo realizar la actauización",
        data: null,
      };

    const updatedResult = await models.acreedores.findByPk(id_acreedor);

    return {
      success: true,
      message: "Objeto actualizado correctamente",
      data: updatedResult,
    };
  },
};

module.exports = { CREATE_ACREDEDOR, DELETE_ACREDEDOR, UPDATE_ACREDEDOR };
