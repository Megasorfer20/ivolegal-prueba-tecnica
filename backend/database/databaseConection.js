const { Sequelize } = require("sequelize");
const { config } = require("dotenv");
const initModels = require("../models/init-models");
config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DBUSER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  }
);

const models = initModels(sequelize);

module.exports = models;
