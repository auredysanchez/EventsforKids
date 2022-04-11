const { response } = require("express");
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;



app.get("/", (request, response) => {
  response.send("Hello KidsEvents");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
