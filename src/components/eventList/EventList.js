import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmptyList from "../emptyList/EmptyList";
import EventCard from "../eventCard/EventCard";
// import kidsEvents from "../../data/kidsEvents.json";

const EventList = ({ search }) => {
  const [filteredkidsEvents, setFilteredkidsEvents] = useState([]);
  const [kidsEvents, setkidsEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (search) {
      let lowerCaseSearch = search.toLocaleLowerCase();
      let listOfkidsEvents = kidsEvents.filter((event) => {
        let fullEvent = `${event.title}`;
        fullEvent = fullEvent.toLocaleLowerCase();
        return fullEvent.includes(lowerCaseSearch);
      });

      console.log(listOfkidsEvents);
      setFilteredkidsEvents(listOfkidsEvents);
    } else {
      setFilteredkidsEvents([]);
    }
  }, [search]);

  console.log(search);

  useEffect(() => {
    let url = "https://events-4-kids.herokuapp.com/events";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setFilteredkidsEvents(data);
        setkidsEvents(data);
      });
  }, []);

  return (
    <div className="eventCard">
      {search &&
        filteredkidsEvents.map((event) => {
          return (
            <Link to={`/event/${event.id}`}>
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                location={event.location}
                isFree={event.isFree}
                age={event.age}
              />
            </Link>
          );
        })}

      {search && filteredkidsEvents.length === 0 && <EmptyList />}

      {kidsEvents.length > 0 &&
        !search &&
        kidsEvents.map((event) => {
          return (
            <Link to={`/event/${event.id}`}>
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                location={event.location}
                isFree={event.isFree}
                age={event.age}
              />
            </Link>
          );
        })}
    </div>
  );
};

export default EventList;
