const routes = require("./routes");

module.exports.mount = (app) => {
  return app.use("/mushroom", routes);
};
