const express = require("express");
const app = express();
const users = require("./fake.json");
const port = 5000;

app.get("/", (req, res) => {
  res.send("hello from My Ever Server");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`I need data for id ${id}`);
  const user = users.find((user) => user.id === id) || {};
  res.send(user);
});

app.listen(port, () => {
  console.log(`My first server is running on port ${port}`);
});
