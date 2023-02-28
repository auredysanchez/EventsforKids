import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

// import kidsEvents from "./data/kidsEvents.json";
import EventList from "./components/eventList/EventList";
// import EventsList from "./components/eventsList/EventsList";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import EventDetail from "./pages/eventDetail/EventDetail";
import AddEvent from "./pages/addEvent/AddEvent";
// import Home from "./pages/home/Home";

const App = () => {
  const [search] = useState("");

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          {/* <Route path='/'>
            <Home />
          </Route> */}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/event/:id">
            <EventDetail />
          </Route>
          <Route path="/addevent">
            <AddEvent />
          </Route>
          <Route path="/">
            <EventList search={search}  />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;

