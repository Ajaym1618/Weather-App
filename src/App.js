import './App.css';
import React, { useState } from "react";
import axios from "axios";
import wind_icon from "./Assets/wind.png";
import humidity_icon from "./Assets/humidity.png";

function App() {
  const [api, setApi] = useState([]);
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [not, setNot] = useState(false);
  const [inputValue, setInputValue] = useState(""); // New state for input value
  const api_key = "2ea4bb4647275c6b88a6f778ff791825";
  const date = new Date().getDate();
  const year = new Date().getFullYear();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDays = days[new Date().getDay()];
  const currentMonth = months[new Date().getMonth()];

  const getData = () => {
    if (city) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`)
        .then((res) => {
          setApi(res.data);
          setTemp(res.data.main.temp);
          setWind(res.data.wind.speed);
          setHumidity(res.data.main.humidity);
          setNot(true);
          setInputValue(city); // Set input value to be displayed
          setCity(""); // Clear the input value
        })
        .then(() => console.log(api));
    } else {
      alert("Enter city name");
    }
  };

  return (
    <div className="container">
      <div className="center">
        <div className='search'>
          <input type="text" placeholder='Enter the city name...' value={city} onChange={(e) => setCity(e.target.value)} />
          <button onClick={getData}>Search</button>
        </div>
        {not === true ?
          <>
            <div className="date-time">
              <span>{currentDays},</span><span>{date}</span><span>{currentMonth}</span><span>{year}</span>
            </div>
            <div className='city'>
              <span>{inputValue}</span>
            </div>
            <div className='temp'>
              <span>{Math.floor(temp)}&deg;C</span>
            </div>
            <div className='ws-hu'>
              <span> <img src={wind_icon} alt="" />{wind}</span>
              <span><img src={humidity_icon} alt="" />{humidity}</span>
            </div>
          </> : null
        }
      </div>
    </div>
  );
}

export default App;






















// import './App.css';
// import React, {useEffect, useState} from "react"
// import axios from "axios"
// function App() {
//   const [api,setApi] = useState([])
//   const [city, setCity] = useState("")
//   const [temp, setTemp] = useState("")
//   const api_key = "2ea4bb4647275c6b88a6f778ff791825";
//   const dates = new Date().getDate()
//   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//   const currentDays = days[new Date().getDay()]
//   // console.log(currentDays)
//   // console.log(dates)

//   // function Api(){
//   //   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`).then((res)=>setApi(res.data)).then(()=>console.log(api))
//   //   // setTemp(api.main.temp)
//   // }

//   useEffect(()=>{
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`).then((res)=>(setApi(res.data),setTemp(res.data.main.temp)))
//   },[city])

//   return (
//     <div className="container">
//       <div className='search'>
//         <input type="text" placeholder='Enter the city name...' onChange = {(e)=>setCity(e.target.value)} />
//         <button >submit</button>
//       </div>
//       <div className="date-time">
//         <span>{dates}</span><span>{currentDays}</span>
//       </div>
//       <div>
//         <span>{temp}</span>
//       </div>
//     </div>
//   );

// }
// export default App;








