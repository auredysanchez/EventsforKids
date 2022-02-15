import React from 'react'
import './EventsCard.scss'




function EventsCard(eventsInfo) {
  const {title, date, location, isFree, age} = eventsInfo
  


    return (
      <div className="eventsCard">
          <img className='eventsCard__profileImage' data-testid="eventsCard__profileImage" src={pic} alt="Event Image" />

        <div className="eventsCard__eventsInfo">
          <div className='eventsCard__eventsTitle' data-testid="eventsCard__eventsTitle"> {title} </div>
          <div className='eventsCard__eventsDate' > {date} </div>
          <div className='eventsCard__eventsLocation'> {location} </div>
          <div className='eventsCard__eventsIsFree'> {isFree} </div>
          <div className='eventsCard__eventsAge' > {age} </div>
        </div>
      </div>
    );

}



export default EventsCard;