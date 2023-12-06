const mongoose = require("mongoose");

const databaseURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager-api";
const connectionURL = databaseURL + "/" + databaseName;

mongoose
  .connect(connectionURL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
