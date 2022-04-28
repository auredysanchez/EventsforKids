import React from "react";
import { Link } from "react-router-dom";
import EventsCard from "../eventsCard/EventsCard";
import kidsEvents from "../../data/kidsEvents.json";
import EmptyList from "../emptyList/EmptyList";



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

      console.log(kidsEvents);
    return (
        <div>
            
        </div>
    )
}

export default EventList;