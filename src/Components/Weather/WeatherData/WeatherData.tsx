import React, { ReactElement } from "react";
import PropTypes from "prop-types";
import Forecast from "./Forecast";

type Props = {
  weatherData: Record<string, unknown>,
};

function WeatherData({ weatherData }: Props): ReactElement | null {
  return (
    <section className="WeatherData">
      {JSON.stringify(weatherData)}
      <Forecast cityName={weatherData.name as string} />
    </section>
  );
}

// WeatherData.propTypes = {
//   weatherData: PropTypes.objectOf(PropTypes.any)
// };

export default WeatherData;
