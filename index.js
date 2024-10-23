const express = require("express");
const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

const router = express.Router();
const middleware = require("./middleware")
router.get("/", middleware.authorization, (_req, res) => {
  res.send("Hello World3!");
});
app.use("/foo", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
