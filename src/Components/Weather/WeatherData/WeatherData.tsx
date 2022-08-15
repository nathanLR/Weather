/* eslint-disable */
import React, { ReactElement } from "react";
import Forecast from "./Forecast";
// styles
import "./WeatherData.style.scss";
// others
import { icons } from "../../../Utils/Constants";

type Props = {
  weatherData: any
}

function WeatherData({ weatherData }: Props): ReactElement | null {
  const {
    name, main, weather,
  } = weatherData;
  
  return (
    <section className="WeatherData">
      <div className="WeatherData__current">
        <h2 className="cityName">
          <span>{name as string}</span>
        </h2>
        <div className="logo">
          <img src={`http://lena4945.odns.fr/Assets/svg/${icons[weather[0].icon]}`} alt="current weather icon" />
        </div>
        <p className="description">{weather[0].description}</p> 
        <p className="temperature">
          {main.temp as number}
          {" "}
          °C
        </p>
      </div>
      <Forecast cityName={weatherData.name as string} />
    </section>
  );
}

export default WeatherData;
