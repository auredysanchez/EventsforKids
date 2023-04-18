import React from "react";
import { useState } from "react";
import "./AddEvent.scss";
// import menuItemData from "../../data/menuItemData.json";

const AddEvent = () => {
  const [formMessage, setFormMessage] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [startAge, setStartAge] = useState("");
  const [endAge, setEndAge] = useState("");
  // const [age, setAge] = useState("");
  const [isFree, setIsFree] = useState(false);

   const resetState = () => {
     setTitle("");
     setDate("");
     setLocation("");
     setStartAge("");
     setEndAge("");
     setIsFree(true);
   };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const url = "https://events-4-kids.herokuapp.com/events";
    const url = "http://localhost:5001/events";

    let requestOptions = {
      method: "POST",
      body: JSON.stringify({ title, date, location, startAge, endAge, isFree}),
      headers: { "Content-Type": "application/json" },
    };

   

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
          // const initialState = {title: '', date: '', location: '', startAge: '', endAge: '', isFree: true};
         
        if (data.success) {
          setFormMessage('Event created successfully');
          resetState();
            //reset all hooks to their defualts (''). clear form
            // display data.msg for user
            //another hook formMsg set as an empty str
        } else {
          setFormMessage('Error Occured');
        }
      });
  };

  console.log(title);
  console.log(date);
  console.log(location);
  console.log(startAge);
  console.log(endAge);
  console.log(isFree);
  // console.log(age);


  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">
          {" "}
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="">
          {" "}
          Date:
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          {" "}
          Location:
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="">
          {" "}
          Start Age:
          <input
            type="number"
            name="age"
            value={startAge}
            onChange={(e) => setStartAge(e.target.value)}
          />
        </label>
        <label htmlFor="">
          {" "}
          End Age:
          <input
            type="number"
            name="age"
            value={endAge}
            onChange={(e) => setEndAge(e.target.value)}
          />
        </label>
        <label htmlFor="">
          {" "}
          Free:
          <input
            type="checkbox"
            name="free"
            value={isFree}
            onChange={(e) => setIsFree(e.target.value)}
          />
        </label>
        {/* <label htmlFor="">
          {" "}
          Age:
          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label> */}
      </div>
      <button type="Submit"> Submit </button>
    </form>
  );
};

export default AddEvent;
