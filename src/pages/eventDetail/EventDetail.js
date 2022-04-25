import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// import EventsCard from "../../components/eventsCard/EventsCard";
import kidsEvents from "../../data/kidsEvents.json";
import "./EventDetail.scss";

const EventDetail = () => {
  const [filteredEventDetails, setFilteredEventDetails] = useState({});

  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    // if (filteredId) {
    let filterEvent = kidsEvents.find((event) => {
      return event.id == id;
    });
    setFilteredEventDetails(filterEvent);
    console.log(filterEvent);
    // } else {
    //   setFilteredEventDetails([]);
    // }
  }, []);

  return (
    <div className="eventDetails">
      
      <h1 className="eventDetailsTitle"> {filteredEventDetails.title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero provident,
        a ipsa esse et cumque, aperiam consequatur impedit ratione harum
        suscipit doloremque sunt ab! Ipsa, eaque aspernatur iste fuga temporibus
        ipsum commodi mollitia esse excepturi maxime quos officiis error ut!
      </p>
    </div>
  );
}

export default EventDetail;
