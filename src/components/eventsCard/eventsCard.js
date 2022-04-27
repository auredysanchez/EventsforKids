import React from "react";
import "./EventsCard.scss";


const EventsCard = (eventsInfo) => {
  const { title, date, location, isFree, age } = eventsInfo;

  return (
    <div className="eventsCard__eventsInfo">
      <div className="eventsCard__eventsTitle">{title}</div>
      <div className="eventsCard__eventsDate">{date}</div>
      <div className="eventsCard__eventsLocation">{location}</div>
      <div className="eventsCard__eventsIsFree">{isFree}</div>
      <div className="eventsCard__eventsAge">{age}</div>
    </div>
  );
}

export default EventsCard;

