require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const bodyParser = require("body-parser");
const app = express();

//this will pass all req and res in json format
app.use(bodyParser.json());
//request handler
app.use(authRoutes);

const mongoUri =
  "mongodb+srv://admin:passwordpassword@cluster0.l2vyv.mongodb.net/<dbname>?retryWrites=true&w=majority";

//connect to mongoDB
mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true });

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

app.get("/", (req, res) => {
  res.send("Hi There !");
});

app.listen(3000, () => {
  console.log("listenint on port 3000");
});
