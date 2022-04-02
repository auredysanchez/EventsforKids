import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import EventsCard from "../components/eventsCard/EventsCard";
import kidsEvents from "../data/kidsEvents.json";

function EventDetail({filteredId}) {
  const [filteredEventDetails, setFilteredEventDetails] = useState([]);

  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (filteredId) {
      let filterEventId = kidsEvents.filter((findId) => {
        let singleId = `${findId.id}`;
        return singleId;
      });
      setFilteredEventDetails(filterEventId);
    } else {
      setFilteredEventDetails([]);
    }
  }, [filteredId]);

  return (
    <div>
      {filteredEventDetails.map((findId) => {
        return (
          <Link to={`/event/${findId.id}`}>
            <EventsCard key={findId.id} />
          </Link>
        );
      })}
      <h1>EventDetail {id}</h1>
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
