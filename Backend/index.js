const express = require("express");
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
  let { user, password } = req.query;
  res.send(`Standard GET response. Welcome Dear ${user} Ji !!`);
});

app.post("/register", (req, res) => {
  let { user, password } = req.body;
  res.send(`Standard GET response. Welcome Dear ${user} Ji !!`);
});

app.listen(port, () => {
  console.log(`Listen to the ${port}`);
});
