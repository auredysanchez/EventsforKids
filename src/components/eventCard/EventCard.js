import React from "react";
// import SearchBar from "../searchBar/SearchBar";
// import { useEffect, useState } from "react";
import "./EventCard.scss";
import EventImage from "../eventImage/EventImage";
// import Grid from '@mui/material/Grid'

const EventCard = (eventsInfo) => {
  const { title, date, image, location, isFree, age } = eventsInfo;

  //  const [search, setSearch] = useState("");

  return (
    // <div className="eventCard">
    <div className="eventCard">
      {/* <Grid container spacing={1}/> */}
      <div className="eventCard__eventTitle ellipsis"> {title} </div>
      <div className="eventCard__eventDate ellipsis"> {date} </div>
      <div className="eventCard__eventImage">
        {" "}
        <EventImage image={image} />{" "}
      </div>
      <div className="eventCard__eventLocation ellipsis">
        {" "}
        <span className="eventCard__locationSpan">Location:</span> {location}{" "}
      </div>
      <div className="eventCard__eventIsFree ellipsis"> {isFree} </div>
      <div className="eventCard__eventAge ellipsis">
        {" "}
        Age: {age[0]} - {age[1]}{" "}
      </div>
    </div>
  );
};

export default EventCard;
