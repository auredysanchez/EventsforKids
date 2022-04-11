const express = require("express");
const router = express.Router();


const KidsEvents = require("../../src/data/kidsEvents.json");


router.get("/", (request, response) => {
  response.json(KidsEvents);
});

//get student by id
router.get("/:id", (request, response) => {
  const eventId = request.params.id;

  const events = KidsEvents.data;

  const singleEvent = events.find((event) => event.id === eventId); // find gives you the the object and the filter gives you the array within the object.

  response.json({ singleEvent }); // send the json for the student with the id of the url
});

module.exports = router;
