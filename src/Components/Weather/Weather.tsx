import React, { ReactElement, useState } from "react";
import WeatherData from "./WeatherData";
import WeatherForm from "./WeatherForm";
import Clock from "../Clock";
// styles
import "./Weather.style.scss";
// others
import { SubmitedValues } from "../../Utils/Types";
import fetchData from "../../Utils/Api";

function Weather(): ReactElement | null {
  const [currentWeather, setCurrentWeather] = useState<Record<string, unknown> | null>(null);

  const fetchWeatherData = async (filters: SubmitedValues): Promise<void> => {
    const weatherData = await fetchData(filters, "current");
    console.log("Weather data :", weatherData);
    setCurrentWeather(weatherData);
  };

  return (
    <div className="WeatherContainer">
      <WeatherForm fetchData={fetchWeatherData} />
      {currentWeather ? <WeatherData weatherData={currentWeather} /> : <Clock />}
    </div>
  );
}

export default Weather;
