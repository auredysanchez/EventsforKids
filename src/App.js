// import { useEffect } from "react";
import React from "react";
import "./App.scss";
import kidsEvents from "./data/kidsEvents.json";
// import questionimage from './assets/questionimage.png'
// import searchBar from "./components/searchBar/SearchBar";
import EventsList from "./components/eventsList/EventsList";

function App() {
  // useEffect(() => {
  //     fetch('/Users/auredy/Desktop/events-for-kids/src/data/kidsEvents.json')
  //       .then((response) => response.json())
  //       .then(data => {
  //         setLoading(false)
  //         setKidsEvents(data.kidsEvents)
  //       });
  // }, [])

  // useEffect(() => {
  //   fetch('')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  // }, [])
  // console.log(kidsEvents)

  return (
    <div className="App">
      <EventsList kidsEvents={kidsEvents} />
      <img src="questionimage" alt="illustration" />
    </div>
  );
}

export default App;

     {
       /* <EventsList kidsEvents={kidsEvents} /> */
     }
     {
       /* <div className="eventsCard">
        {kidsEvents.map((event) => {
          return (
            <div className="eventsCard__eventsInfo" key={event.id}>
              <img
                className="eventsCard__profileImage"
                src={questionimage}
                alt="illustration"
              />
              <div className="eventsCard__eventsTitle">{event.title}</div>
              <div className="eventsCard__eventsDate">{event.date}</div>
              <div className="eventsCard__eventsLocation">{event.location}</div>
              <div className="eventsCard__eventsIsFree">{event.isFree}</div>
              <div className="eventsCard__eventsAge">{event.age}</div>
            </div>
          );
        })}
      </div> */
     }
