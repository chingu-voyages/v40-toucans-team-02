require("dotenv").config();

const PORT = process.env.PORT;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const MONGO_URI =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGO_URI
    : process.env.MONGO_URI;

module.exports = {
  PORT,
  GOOGLE_API_KEY,
  MONGO_URI,
};
