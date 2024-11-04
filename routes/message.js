const express = require("express");
const route = express.Router();
const User = require("../storage/store");
const { body, validationResult } = require("express-validator");

route.get("/", (req, res) => {
  res.render("form");
});

route.post("/", (req, res) => {
  const { user, messageText } = req.body;
  const newItem = {
    user,
    text: messageText,
    added: new Date().toLocaleString(),
  };
  User.push(newItem);
  console.log(User);

  res.redirect("/new/message");
});

route.get("/message", (req, res) => {
  try {
    res.render("messages", { user: User });
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
