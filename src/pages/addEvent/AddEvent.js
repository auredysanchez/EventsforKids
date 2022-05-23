import React from "react";
import { useState } from "react";
import "./AddEvent.scss";
// import menuItemData from "../../data/menuItemData.json";

const AddEvent = () => {
  //   const [addAnEventDetail, setAddAnEventDetail] = useState();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState('')
  const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//       const title = event.target.title;
//       const value = event.target.value;
//       setInputs(values => ({...values, [title]: value}))

//   };

  const handleSubmit = (event) => {
    event.PreventDefault();
    // alert(inputs);
  };
  console.log(title);
  console.log(date);
  console.log(location);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="">
        {" "}
        Title:
        <input
          type="text"
          name="title"
        //   value={inputs.title || ''}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label htmlFor="">
        {" "}
        Date:
        <input
          type="date"
          name="date"
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label htmlFor="">
        {" "}
        Location:
        <input
          type="text"
          name="location"
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <label htmlFor="">
        {" "}
        Age:
        <input
          type="number"
          name="age"
        //   value={inputs.age || ""}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <input type="submit" value="submit" />
      {/* <input type="text" /> input for age. fix the age or make a function to do the math*/}
    </form>
  );
};

export default AddEvent;
