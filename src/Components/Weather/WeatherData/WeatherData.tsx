import React, { ReactElement, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Forecast from "./Forecast";
// styles
import "./WeatherData.style.scss";
// others
import { icons } from "../../../Utils/Constants";
// type Props = {
//   weatherData: Record<string, string | number> | T<number | string>,
// };

function WeatherData({ weatherData }: any): ReactElement | null {
  const [locationTime, setLocationTime] = useState<number>((weatherData.dt * 1000) + weatherData.timezone);
  const {
    name, main, weather,
  } = weatherData;

  const displayDate = (): string => {
    const currentDate = new Date(locationTime);
    return `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
  };
  // useEffect(() => {
  //   const myInterval = setInterval(
  //     () => { setLocationTime((prev) => prev + 1000); },
  //     1000,
  //   );

  //   return () => { clearInterval(myInterval); };
  // }, []);

  return (
    <section className="WeatherData">
      <div className="WeatherData__current">
        <h2 className="cityName">
          <span>{name}</span>
          {/* <span>{displayDate()}</span> */}
        </h2>
        <div className="logo">
          <img src={`../../../../Assets/svg/${icons[weather[0].icon]}`} alt="current weather icon" />
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
