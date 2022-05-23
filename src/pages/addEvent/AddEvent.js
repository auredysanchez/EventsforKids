import React from "react";
import { useState } from "react";
import "./AddEvent.scss";
// import menuItemData from "../../data/menuItemData.json";

const AddEvent = () => {
//   const [addAnEventDetail, setAddAnEventDetail] = useState();
const [title, setTitle] = useState('');
const [date, setDate] = useState("");
const [location, setLocation] = useState("");

const handleSubmit = (event) => {
    // eventPreventDefault();

}
console.log(title)
console.log(date);
console.log(location);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <input type="text" onChange={(e) => setLocation(e.target.value)} />
      <input type="submit" value="submit" />
      {/* <input type="text" /> input for age. fix the age or make a function to do the math*/}
    </form>
  );
};

export default AddEvent;
