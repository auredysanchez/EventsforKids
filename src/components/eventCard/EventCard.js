import React from "react";
import "./EventCard.scss";
import EventImage from "../eventImage/EventImage";

const EventCard = (eventsInfo) => {
  const { title, date, image, location, isFree, age } = eventsInfo;

  return (
    // <div className="eventCard">

    <div className="eventCard">
      <div className="eventCard__eventTitle ellipsis"> {title} </div>
      <div className="eventCard__eventDate ellipsis"> {date} </div>
      <div className="eventCard__eventImage ellipsis">
        {" "}
        <EventImage image={image} />{" "}
      </div>
      <div className="eventCard__eventLocation ellipsis"> {location} </div>
      <div className="eventCard__eventIsFree ellipsis"> {isFree} </div>
      <div className="eventCard__eventAge ellipsis">
        {" "}
        Age: {age[0]} - {age[1]}{" "}
      </div>
    </div>
  );
};

export default EventCard;
