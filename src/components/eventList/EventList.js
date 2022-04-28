import React, {useEffect, useState} from "react";
import EmptyList from "../emptyList/EmptyList";
import EventCard from "../eventCard/EventCard";
import kidsEvents from "../../data/kidsEvents.json";




const EventList = ({search}) => {
    const [filteredkidsEvents, setFilteredkidsEvents] = useState([]);

      useEffect(() => {
   
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

      
    return (
      <div className="eventCard">
        {search && filteredkidsEvents.length === 0 && <EmptyList />}
        <EventCard />
      </div>
    );
}

export default EventList;