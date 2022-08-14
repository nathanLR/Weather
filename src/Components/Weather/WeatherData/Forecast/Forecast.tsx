import React, { ReactElement, useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
// styles
import "owl.carousel/dist/assets/owl.carousel.css"; // eslint-disable-line import/no-extraneous-dependencies
import "owl.carousel/dist/assets/owl.theme.default.css"; // eslint-disable-line import/no-extraneous-dependencies
// others
import PropTypes from "prop-types";
import fetchData from "../../../../Utils/Api";
import ForecastItem from "./ForecastItem";

type Props = {
  cityName: string,
};

function Forecast({ cityName }: Props): ReactElement | null {
  const [forecast, setForcast] = useState<Array<any> | null>(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      const data = await fetchData({ cityName }, "forecast");
      console.log("Forecast data : ", data);
      setForcast(data.list);
    };
    fetchForecastData();
  }, [cityName]);

  if (!forecast) {
    return <p>fetching...</p>;
  }

  return (
    <OwlCarousel margin={10} items={4}>
      {forecast.map((hourly) => <ForecastItem data={hourly} />)}
    </OwlCarousel>
  );
}

Forecast.propTypes = {
  cityName: PropTypes.string.isRequired,
};

export default Forecast;
