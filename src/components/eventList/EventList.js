import React from "react";

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
        <div>
            Hi
        </div>
    )
}

export default EventList;