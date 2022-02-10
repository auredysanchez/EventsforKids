import { useEffect } from "react";
import "./App.css";
import kidsEvents from "./data/kidsEvents.json";

function App() {
  // useEffect(() => {
  //   fetch('')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  // }, [])

  return (
    <div className="App">
      {kidsEvents.map((event) => {
        return <div> {event.title} 
                      {event.date} 
                      {event.location}
                      {event.isFree}
              </div>;
      })}
    </div>
  );
}

export default App;
