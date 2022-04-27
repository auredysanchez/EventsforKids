import React, { useState, useEffect } from "react";
import EventsCard from "../eventsCard/EventsCard";
import kidsEvents from "../../data/kidsEvents.json";
import EmptyList from "../emptyList/EmptyList";
import { Link } from "react-router-dom";


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

//  <div className="eventsCard__eventsInfo" key={event.id}>
//    <img
//      className="eventsCard__profileImage"
//      src={questionimage}
//      alt="illustration"
//    />
//    <div className="eventsCard__eventsTitle">{event.title}</div>
//    <div className="eventsCard__eventsDate">{event.date}</div>
//    <div className="eventsCard__eventsLocation">{event.location}</div>
//    <div className="eventsCard__eventsIsFree">{event.isFree}</div>
//    <div className="eventsCard__eventsAge">{event.age}</div>
//  </div>;

// useEffect(() => {
//     fetch('/Users/auredy/Desktop/events-for-kids/src/data/kidsEvents.json')
//       .then((response) => response.json())
//       .then(data => {
//         setLoading(false)
//         setKidsEvents(data.kidsEvents)
//       });
// }, []

// {
//   kidsEvents.map((event) => {
//     return (
//       <EventsCard key={event.id} eventsInfo={event} />
//       // questionimage={event.questionimage}
//       // <div className="eventsCard__eventsInfo" key={event.id}>
//       //   <img
//       //     className="eventsCard__profileImage"
//       //     src={questionimage}
//       //     alt="illustration"
//       //   />
//       //   <div className="eventsCard__eventsTitle">{event.title}</div>
//       //   <div className="eventsCard__eventsDate">{event.date}</div>
//       //   <div className="eventsCard__eventsLocation">{event.location}</div>
//       //   <div className="eventsCard__eventsIsFree">{event.isFree}</div>
//       //   <div className="eventsCard__eventsAge">{event.age}</div>
//       // </div>
//     );
//   });
// }
