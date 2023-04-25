import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
// import EventsCard from "../../components/eventsCard/EventsCard";
import kidsEvents from "../../data/kidsEvents.json";
import { LoremIpsum } from "react-lorem-ipsum";
import "./EventDetail.scss";

const EventDetail = () => {
  const [filteredEventDetails, setFilteredEventDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const Lorem = (
    <LoremIpsum avgWordsPerSentence={8} avgSentencesPerParagraph={10} />
  );

  let { id } = useParams();
  // console.log(id);

  useEffect(() => {
    // Fetch event data from API or database
    // For now, we'll use a hardcoded object
    // const filteredEventDetails = {
    //   id: "292276372",
    //   title: "Pokemon Hunt",
    //   date: "Saturday, May 29, 2021",
    //   time: "10:00 AM to 12:00 PM PDT",
    //   location: "Central Park, Manhattan, NY",
    //   description:
    //     "Join us for a friendly game of soccer! All skill levels are welcome. We ask that you bring your own soccer ball and wear appropriate soccer attire (cleats recommended).",
    //   imageUrl:
    //     "https://secure.meetupstatic.com/photos/event/8/f/6/7/highres_493872935.jpeg",
    // };
    // setFilteredEventDetails(filteredEventDetails);
    // setIsLoading(false);
      if (id) {
        let filterEvent = kidsEvents.find((event) => {
          return event.id == id;
        });
        setFilteredEventDetails(filterEvent);
        // console.log(filterEvent);
      } else {
        setFilteredEventDetails([]);
      }
      setIsLoading(false);
  }, []);

  // useEffect(() => {
  //   // if (filteredId) {
  //   let filterEvent = kidsEvents.find((event) => {
  //     return event.id == id;
  //   });
  //   setFilteredEventDetails(filterEvent);
  //   setIsLoading(false);
  //   console.log(filterEvent);
  //   // } else {
  //   //   setFilteredEventDetails([]);
  //   // }
  // }, [id]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

  return (
    <div className="eventDetails">
      <div className="eventDetails__header">
        <div className="eventDetails__title"> {filteredEventDetails.title}</div>
      </div>
      <div className="layout__twoColumns">
        <div className="eventDetails__content">
          <div className="eventDetails__image">
            {" "}
            <img src="/images/pokemon-go-masks.jpg" alt="" />
          </div>
          <div className="eventDetails__description">
            <h2>Details</h2>
            {filteredEventDetails.description}
            {/* {Lorem} */}
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          provident, a ipsa esse et cumque, aperiam consequatur impedit ratione
          harum suscipit doloremque sunt ab! Ipsa, eaque aspernatur iste fuga
          temporibus ipsum commodi mollitia esse excepturi maxime quos officiis
          error ut! */}
          </div>
        </div>

        <div className="eventDetails__infoBox">
          <div className="eventDetails__date">{filteredEventDetails.date}</div>
          <div className="eventDetails__time">{filteredEventDetails.time}</div>
          <br />
          <div className="eventDetails__location">
            <h3>Location</h3>
            <p>{filteredEventDetails.location}</p>
          </div>
          <button className="eventDetails__button">RSVP</button>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
