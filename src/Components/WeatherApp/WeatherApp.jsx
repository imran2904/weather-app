import React, { useState } from 'react'
import './WeatherApp.css';

import search_icon from "../Asset/search.png";
import clear_icon from "../Asset/clear.png";
import drizzle_icon from "../Asset/drizzle.png";
import cloud_icon from "../Asset/cloud.png";
import humidity_icon from "../Asset/humidity.png";
import rain_icon from "../Asset/rain.png";
import snow_icon from "../Asset/snow.png";
import wind_icon from "../Asset/wind.png";


export const WeatherApp = () => {
  let api_key = "070a2873d14f6ee530259114d9b70a68";
  const [wicon,setWicon]=useState(cloud_icon)
  const search = async () => {
  const element= document.getElementsByClassName("city-input");
  if (element[0].value === ""){
    return 0;
  
  }
  let url=`https://api.openweathermap.org/data/2.5/weather?q=
  ${element[0].value}&units=metric&appid=${api_key}`;

  let response= await fetch(url);
  let data= await response.json();
  const humidity=document.getElementsByClassName("humidity-parcentage");
  const wind=document.getElementsByClassName("wind-rate");
  const temprature=document.getElementsByClassName("weather-temp");
  const location=document.getElementsByClassName("weather-location");

  humidity[0].innerHTML=data.main.humidity+" %";
  wind[0].innerHTML=data.wind.speed+" km/h";
  temprature[0].innerHTML=data.main.temp+"°";
  location[0].innerHTML=data.name;

  if(data.weather[0].icon==='01d'||data.weather[0].icon==='01n')
  {

    setWicon(clear_icon);
  }
  else if(data.weather[0].icon==='02d'||data.weather[0].icon==='02n')
  {
    setWicon(cloud_icon);
  }
  else if(data.weather[0].icon==='03d'||data.weather[0].icon==='03n')
  {
    setWicon(drizzle_icon);
  }
  else if(data.weather[0].icon==='04d'||data.weather[0].icon==='04n')
  {
    setWicon(drizzle_icon);
  }

  else if(data.weather[0].icon==='09d'||data.weather[0].icon==='09n')
  {
    setWicon(rain_icon);
  }
  else if(data.weather[0].icon==='10d'||data.weather[0].icon==='10n')
  {
    setWicon(rain_icon);
  }
  else if(data.weather[0].icon==='13d'||data.weather[0].icon==='13n')
  {
    setWicon(snow_icon);
  }
  else{
    setWicon(clear_icon);
  }

  }
  
  return (
    <div className='container'>
      <div className='top-bar'>
          <input type="text" className="city-input" placeholder='search' />
          <div className="search-icon" onClick={()=>{search()}}>
        <img src={search_icon} alt="search-icon" />
      </div>

      </div>
      <div className="Weather-image">
        <img src={wicon} alt="cloud" />
      </div>
      <div className="weather-temp">24°</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        
        <div className="element">
          <img src={humidity_icon} alt="" className='icon' />
          <div className="data">
            <div className="humidity-parcentage">64%</div>
            <div className="text">humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={wind_icon} alt="" className='icon' />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">wind speed</div>
          </div>
        </div>
      
      </div>
    </div>
  )
}

