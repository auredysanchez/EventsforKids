import React, { useState, useEffect } from "react";
// import React from "react";
// import questionimage from "../../assets/questionimage.png";
import EventsCard from "../eventsCard/EventsCard";
import kidsEvents from '../../data/kidsEvents.json'

function EventsList() {
  // const [kidsEvents, setKidsEvents] = useState([]);

      
  //   useEffect(() => {
  //     fetch("src/data/kidsEvents.json")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setLoading(false);
  //         setkidsEvents(data.event);
  //       });
  //   }, []);

  console.log(kidsEvents);
  return (
      <div className="eventsCard">
        {kidsEvents.map(event => {
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
