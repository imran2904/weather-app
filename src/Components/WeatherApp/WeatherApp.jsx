import "./WeatherApp.css";
import React, { useState, useRef } from "react";
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
  const [wicon, setWicon] = useState(cloud_icon);
  const humidityRef = useRef(null);
  const windRef = useRef(null);
  const temperatureRef = useRef(null);
  const locationRef = useRef(null);
  const inputRef = useRef(null);

  const search = async () => {
    if (inputRef.current.value === "") {
      return;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    humidityRef.current.innerHTML = data.main.humidity + " %";
    windRef.current.innerHTML = data.wind.speed + " km/h";
    temperatureRef.current.innerHTML = data.main.temp + "°";
    locationRef.current.innerHTML = data.name;

    switch (data.weather[0].icon) {
      case "01d":
      case "01n":
        setWicon(clear_icon);
        break;
      case "02d":
      case "02n":
        setWicon(cloud_icon);
        break;
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        setWicon(drizzle_icon);
        break;
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        setWicon(rain_icon);
        break;
      case "13d":
      case "13n":
        setWicon(snow_icon);
        break;
      default:
        setWicon(clear_icon);
    }
  };

  return (
    <div className="my-container">
      <div className="top-bar">
        <input
          type="text"
          className="city-input"
          placeholder="search"
          ref={inputRef}
        />
        <div className="search-icon" onClick={search}>
          <img src={search_icon} alt="search-icon" />
        </div>
      </div>
      <div className="Weather-image">
        <img src={wicon} alt="cloud" />
      </div>
      <div className="weather-temp" ref={temperatureRef}>
        24°
      </div>
      <div className="weather-location" ref={locationRef}>
        London
      </div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-parcentage" ref={humidityRef}>
              64%
            </div>
            <div className="text">humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate" ref={windRef}>
              18 km/h
            </div>
            <div className="text">wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
