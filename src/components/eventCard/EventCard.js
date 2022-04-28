import React from "react";
import './EventCard.scss'


const EventCard = (eventsInfo) => {
    const { title, date, location, isFree, age } = eventsInfo;


  return (
    <div className="eventCard__eventInfo">
      <div className="eventCard__eventTitle">{title}</div>
      <div className="eventCard__eventDate">{date}</div>
      <div className="eventCard__eventLocation">{location}</div>
      <div className="eventCard__eventIsFree">{isFree}</div>
      <div className="eventCard__eventAge">{age}</div>
    </div>
  );
};

export default EventCard;

