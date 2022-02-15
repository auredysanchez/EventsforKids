// import React, { useState, useEffect} from "react";
// import EventsCard from '../eventsCard/EventsCard';

function EventsList(props) {

    // const [loading, setLoading] = useState(true);
    // const [kidsEvents, setKidsEvents] = useState([]);

    // useEffect(() => {
    //     fetch('/Users/auredy/Desktop/events-for-kids/src/data/kidsEvents.json')
    //       .then((response) => response.json())
    //       .then(data => {
    //         setLoading(false)
    //         setKidsEvents(data.kidsEvents)
    //       });
    // }, [])


    return (
      <div>
        {loading && 'Loading....'}
        
        {/* {
            kidsEvents.length > 0 &&
            kidsEvents.map((event) => {
                return (
                //   <EventsCard
                //     key={event.id}
                //     eventsInfo={event}
                //     />

                    <div>
                        {" "}
                        {event.title}
                        {event.date}
                        {event.location}
                        {event.isFree}
                    </div>
                  
                );
            }) */}
        {/* } */}
      </div>
    );
}

export default EventsList;