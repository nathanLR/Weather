import React, { ReactElement } from "react";
import PropTypes from "prop-types";
// styles
import "./ForecastItem.style.scss";
// others
import { icons } from "../../../../../Utils/Constants";

// type Props = {
//   data: Record<string, string | number | Record<string, unknown>>
// };

// const displayDate = (data: string): string => {
//   const
//   return ""
// }

function ForecastItem({ data }: { data: any }): ReactElement | null {
  return (
    <div className="forecastElement">
      <p>DAY</p>
      <div className="forecastLogo">
        <img src={`../../../../Assets/svg/${icons[data.weather[0].icon]}`} alt="forecast logo" />
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
