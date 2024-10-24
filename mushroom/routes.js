const routes = require('express').Router();

const middleware = require("../middleware")

routes.get("/", middleware.authorization, (_req, res) => {
  res.send("Amanita muscaria");
});

module.exports = routes;
