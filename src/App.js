import { useEffect } from 'react';
import './App.css';
import kidsEvents from './data/kidsEvents.json';

function App() {

  // useEffect(() => {
  //   fetch('')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  // }, [])
  console.log(kidsEvents)

  return (
    <div className="App">
      {kidsEvents.map((event) => {
        return (<div> {event.title} </div>)
      })}
    </div>
  );
}

export default App;
