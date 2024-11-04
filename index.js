const express = require("express");
const app = express();
const PORT = 4050;
const users = require("./storage/store.js");
const indexRoute = require("./routes/index.js");
const messageRoute = require("./routes/message.js");

// middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use("/", indexRoute);
app.use("/new", messageRoute);

app.listen(PORT, () => {
  console.log(`the app is listening on port ${PORT}`);
});
