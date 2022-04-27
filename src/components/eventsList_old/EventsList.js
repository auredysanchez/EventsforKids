import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EventsCard from "../eventsCard/EventsCard";
import kidsEvents from "../../data/kidsEvents.json";
import EmptyList from "../emptyList/EmptyList";


const EventsList = ({search}) => {
  // const [loading, setLoading] = useState(true);
  const [filteredkidsEvents, setFilteredkidsEvents] = useState([]);//hook - 
  // const [search, setSearch] = useState("");//hook
 

  useEffect(() => {
    //filter the event by full name for any names that include the characters in the search
    //case insenssitive, math any part of the string
    //treat the title as one string
    if (search) {
      let lowerCaseSearch = search.toLocaleLowerCase();
      let listOfkidsEvents = kidsEvents.filter((event) => {
        let fullEvent = `${event.title}`;
        fullEvent = fullEvent.toLocaleLowerCase();
        return fullEvent.includes(lowerCaseSearch);
      });
      setFilteredkidsEvents(listOfkidsEvents);
    } else {
      setFilteredkidsEvents([]);
    }
  }, [search]);

  //   useEffect(() => {
  //     fetch("src/data/kidsEvents.json")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setLoading(false);
  //         setkidsEvents();
  //       });
  //   }, []);

  console.log(kidsEvents);
  return (
    <div className="eventsCard">
      {/* {loading && <LoadingView />} */}

      {search &&
        filteredkidsEvents.map((event) => {
          return (
            <EventsCard
              key={event.id}
              title={event.title}
              date={event.date}
              location={event.location}
              isFree={event.isFree}
              age={event.age}
            />
          );
        })}

      {search && filteredkidsEvents.length === 0 && <EmptyList />}

      {kidsEvents.length > 0 &&
        !search &&
        kidsEvents.map((event) => {
          return (
            <Link to={`/event/${event.id}`}>
              <EventsCard
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
}

export default EventsList;
