const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const { config } = require("dotenv");
const queryShema = require("./shema/shemas.js");

class Server {
  constructor() {
    config();
    this.app = express();
    this.port = process.env.PORT;
    this.path = "/API";
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(
      `${this.path}/graphql`,
      graphqlHTTP({
        schema: queryShema,
        graphiql: true,
      })
    );
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`This App is running in ${this.port}`);
    });
  }
}

module.exports = Server;
