const app = require("../swagger-modules/app");
const { swaggerUi, specs } = require("./modules/swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
