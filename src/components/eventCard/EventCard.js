import React from "react";
import "./EventCard.scss";
import EventImage from "../eventImage/EventImage";

const EventCard = (eventsInfo) => {
  const { title, date, image, location, isFree, age } = eventsInfo;

  return (
    <div className="eventCard">
      <div className="eventCard__eventTitle"> {title} </div>
      <div className="eventCard__eventDate"> {date} </div>
      <div className="eventCard__eventImage">
        {" "}
        <EventImage image={image} />{" "}
      </div>
      <div className="eventCard__eventLocation">
        {" "}
        <span className="eventCard__eventLocation__color">Location:</span>{" "}
        {location}{" "}
      </div>
      <div className="eventCard__eventIsFree"> {isFree} </div>
      <div className="eventCard__eventAge">
        {" "}
        <span className="eventCard__eventAge__color">Age:</span>{" "}
        {age[0]} - {age[1]}{" "}
      </div>
    </div>
  );
};

export default EventCard;
