const { response } = require("express");
const express = require("express");
const cors = require('cors');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

const eventsController = require("./controllers/eventsController");

app.use(cors());

app.use("/events", eventsController);

app.get("/", (request, response) => {
  response.send("Hello KidsEvents");
});

app.listen(PORT, () => {
  console.log(`🪨 Listening on port ${PORT} 💎 `);
});

module.exports = app;
