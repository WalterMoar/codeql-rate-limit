const express = require("express");
const app = express();
const port = 3000;

var RateLimit = require('express-rate-limit');
var limiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requests per windowMs
});

// apply rate limiter to all requests
app.use(limiter);

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

const router = require("express").Router();
const middleware = require("./middleware")
router.get("/", middleware.authorization, (_req, res) => {
  res.send("Hello World2!");
});
app.use("/foo", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
