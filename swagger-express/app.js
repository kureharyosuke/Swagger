const express = require("express");
const { swaggerUi, specs } = require("./modules/swagger");
const app = express();

const post = process.env.PORT || 3000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(3000, function () {
  console.log(`Server listening on port ${post} 🚚`);
});
