import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import kidsEvents from "./data/kidsEvents.json";
import EventList from "./components/eventList/EventList";
// import EventsList from "./components/eventsList/EventsList";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import EventDetail from "./pages/eventDetail/EventDetail";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} />
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/event/:id">
            <EventDetail />
          </Route>
          <Route path="/">
            <EventList />
            {/* <EventsList kidsEvents={kidsEvents} search={search} /> */}
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
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
