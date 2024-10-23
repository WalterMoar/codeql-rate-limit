const express = require('express')
const app = express()
const port = 3000

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

const router = require('express').Router();
router.get('/', (_req, res) => {
    res.send('Hello World2!')
  }
);
app.use('/foo', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
