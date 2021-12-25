const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//MIDDLEWARE CORS
app.use(cors());

//bodyParser to accept the req's json data
app.use(bodyParser.json());
// IMPORT ROUTES from the routes  files
const postsRoute = require("./routes/posts");
const authRoute =require("./routes/auth");

app.use("/auth/",authRoute)
app.use("/posts", postsRoute);

require("dotenv/config");
// CREATE ROUTE
  
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to DB .."))
  .catch((err) => console.log(err));

//ROUTES

app.listen(3000, () => {
  console.log("starting at port 3000");
});
