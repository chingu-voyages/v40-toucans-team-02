const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
require("dotenv").config();

// MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(cors());

const PORT = 3001;
const MONGO_URI =
  "mongodb+srv://toucan123:toucan123@commuterpal.eg5aaoh.mongodb.net/commuteDB?retryWrites=true&w=majority";

// MONGODB CONNECTION
mongoose.connect(MONGO_URI, (err) =>
  err ? console.log(err) : console.log("DB connected")
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
