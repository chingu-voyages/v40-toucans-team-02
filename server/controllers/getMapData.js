const config = require("../utils/config");
const axios = require("axios");
const getMapDataRouter = require("express").Router();

const GOOGLE_API_KEY = config.GOOGLE_API_KEY;

getMapDataRouter.post("/:origin&:destination", async (req, res) => {
  console.log(req.params);
  const { origin, destination } = req.params;
  try {
    const result = await axios.get(
      `https://maps.googleapis.com/maps/api/directions/json?destination=${destination}&origin=${origin}&key=${GOOGLE_API_KEY}`
    );
    const distance = result.data.routes[0].legs[0].distance;
    const duration = result.data.routes[0].legs[0].duration;
    const objToReturn = { distance, duration };
    return res.status(200).send(objToReturn);
  } catch (err) {
    console.error(err);
    return res.status(500).send("server error");
  }
});

getMapDataRouter.get("/test", async (req, res) => {
  console.log("get");
  return res.status(200).send("ok");
});

module.exports = getMapDataRouter;
