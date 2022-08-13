import React, { ReactElement, useEffect, useState } from "react";
import PropTypes from "prop-types";
import fetchData from "../../../../Utils/Api";

type Props = {
  cityName: string,
};

function Forecast({ cityName }: Props): ReactElement | null {
  const [forecast, setForcast] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      const data = await fetchData({ cityName }, "forecast");
      console.log("Forecast data : ", data);
      setForcast(data);
    };
    fetchForecastData();
  }, []);

  if (!forecast) {
    return <p>fetching...</p>;
  }
  return <p>{JSON.stringify(forecast)}</p>;
}

Forecast.propTypes = {
  cityName: PropTypes.string.isRequired,
};

export default Forecast;
