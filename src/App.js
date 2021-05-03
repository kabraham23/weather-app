import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/Weather'

function App() {

const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);
const [data, setData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("latitude is: ", lat)
    console.log("longitude is: ", long)
  
    await fetch(`${process.env.REACT_APP_API_URL}/weather/?units=imperial&lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(result => {
      setData(result)
      console.log(result);
    });
  }
  fetchData();
}, [lat, long]);



  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
