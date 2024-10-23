const express = require("express");

// app.get("/", (_req, res) => {
//   res.send("Hello World!");
// });

const router = express.Router();
const middleware = require("./middleware")
router.get("/", middleware.authorization, (_req, res) => {
  res.send("Hello World3!");
});

const app = express();
app.use("/foo", router);

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
