const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    info: {
      title: "Test Api",
      version: "1.0.0",
      description: "Test Api with express",
    },
    host: "localhost:3300",
    basePath: "/",
  },
  apis: ["./routes/*.js", "./swagger/*"],
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
