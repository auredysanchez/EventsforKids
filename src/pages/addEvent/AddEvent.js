import React from "react";
import { useState } from "react";
import "./AddEvent.scss";
// import menuItemData from "../../data/menuItemData.json";

const AddEvent = () => {
  const [formMessage, setFormMessage] = useState('');
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [startAge, setStartAge] = useState("");
  const [endAge, setEndAge] = useState("");
  //   const [inputs, setInputs] = useState({});

  //   const handleChange = (event) => {
  //       const title = event.target.title;
  //       const value = event.target.value;
  //       setInputs(values => ({...values, [title]: value}))

  //   };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const url = "https://events-4-kids.herokuapp.com/events";
    const url = "http://localhost:5001/events";

    let requestOptions = {
      method: "POST",
      body: JSON.stringify({ startAge, endAge, title, date, location }),
      headers: { "Content-Type": "application/json" },
    };

   

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
          const initialState = {title: '', date: '', location: '', startAge: '', endAge: ''};
           const resetSate = () => {
               setFormMessage(initialState)
           };
        if (data.successs) {
            initialState = '';
            return setFormMessage(initialState);
            // return initialState;
            //reset all hooks to their defualts (''). clear form
            // display data.msg for user
            //another hook formMsg set as an empty str
        }
        resetSate()
      });
  };

  console.log(title);
  console.log(date);
  console.log(location);

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
      </div>
      <input type="submit" value="submit" />
      {/* <input type="text" /> input for age. fix the age or make a function to do the math*/}
    </form>
  );
};

export default AddEvent;
