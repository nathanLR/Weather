import React, { ReactElement } from "react";
import PropTypes from "prop-types";
// styles
import "./ForecastItem.style.scss";
// others
import { icons } from "../../../../../Utils/Constants";

const displayDate = (data: string): string => {
  const [date, time] = data.split(" ");
  const currentForecast = new Date(date);
  return `
    ${currentForecast.toLocaleDateString(navigator.language, { weekday: "short", day: "numeric" }).toUpperCase()}
     - ${time.split(":")[0]}H
  `;
};

function ForecastItem({ data }: { data: any }): ReactElement | null {
  return (
    <div className="forecastElement" key={data.dt}>
      <p>{displayDate(data.dt_txt)}</p>
      <div className="forecastLogo">
        <img src={`http://lena4945.odns.fr/Assets/svg/${icons[data.weather[0].icon]}`} alt="forecast logo" />
      </div>
      <p className="temp">
        {data.main.temp}
        {" "}
        °C
      </p>
    </div>
  );
}

ForecastItem.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.any])).isRequired,
};

export default ForecastItem;
