const config = require("./utils/config");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const jwt = require("jsonwebtoken");

const getMapDataRouter = require("./controllers/getMapData");
const loginRouter = require("./controllers/login");
const usersRouter = require("./controllers/users");

// MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(cors());

// MONGODB CONNECTION
mongoose.connect(config.MONGO_URI, (err) =>
  err ? console.log(err) : console.log("DB connected")
);

// ROUTES
app.use("/api", getMapDataRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);

app.listen(config.PORT, () =>
  console.log(`Server running on port ${config.PORT}`)
);
