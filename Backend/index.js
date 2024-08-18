const express = require("express");
const app = express();
const port = 5000;

app.get("/register", (req, res) => {
  let { user, password } = req.query;
  res.send(`Standard GET response. Welcome Dear ${user} Ji !!`);
});

app.post("/register", (req, res) => {
  res.send("Standard POST response");
});

app.listen(port, () => {
  console.log(`Listen to the ${port}`);
});
