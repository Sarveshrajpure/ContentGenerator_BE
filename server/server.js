const express = require("express");
const app = express();
const mongoose = require("mongoose");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const cors = require("cors");
require("dotenv").config();

///body parser
app.use(express.json());

///sanitize
app.use(xss());
app.use(mongoSanitize());

///CORS
app.use(cors());

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
