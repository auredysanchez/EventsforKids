import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmptyList from "../emptyList/EmptyList";
import EventCard from "../eventCard/EventCard";
import LoadingView from "../loadingView/LoadingView";
// import kidsEvents from "../../data/kidsEvents.json";

const EventList = ({ search }) => {
  const [filteredkidsEvents, setFilteredkidsEvents] = useState([]);
  const [kidsEvents, setkidsEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect search", search, kidsEvents, filteredkidsEvents);
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
  }, [search, kidsEvents]);

  // console.log(search);

  useEffect(() => {
    console.log("useEffect api", search, kidsEvents, filteredkidsEvents);
    let url = "https://events-4-kids.herokuapp.com/events";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setFilteredkidsEvents(data);
        setkidsEvents(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="eventCard">
      {loading && <LoadingView />}
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
