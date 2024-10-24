const router = require("express").Router();

const mushroomRoutes = require("./mushroom");

mushroomRoutes.mount(router);

module.exports = router;
