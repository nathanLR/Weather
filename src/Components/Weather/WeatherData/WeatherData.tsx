import React, { ReactElement, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Forecast from "./Forecast";
// styles
import "./WeatherData.style.scss";
// others
import { icons } from "../../../Utils/Constants";

function WeatherData({ weatherData }: any): ReactElement | null {
  const [locationTime, setLocationTime] = useState<number>((weatherData.dt * 1000) + weatherData.timezone);
  const {
    name, main, weather,
  } = weatherData;

  const displayDate = (): string => {
    const currentDate = new Date(locationTime);
    return `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
  };

  return (
    <section className="WeatherData">
      <div className="WeatherData__current">
        <h2 className="cityName">
          <span>{name}</span>
        </h2>
        <div className="logo">
          <img src={`http://lena4945.odns.fr/Assets/svg/${icons[weather[0].icon]}`} alt="current weather icon" />
        </div>
        <p className="description">{weather[0].description}</p>
        <p className="temperature">
          {main.temp}
          {" "}
          °C
        </p>
      </div>
      <Forecast cityName={weatherData.name as string} />
    </section>
  );
}

// WeatherData.propTypes = {
//   weatherData: PropTypes.objectOf(PropTypes.any)
// };

export default WeatherData;
