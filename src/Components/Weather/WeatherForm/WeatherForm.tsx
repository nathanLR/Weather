import React, { ReactElement, useState } from "react";
import PropTypes from "prop-types";
import { SubmitedValues } from "../../../Utils/Types";
// styles
import "./WeatherForm.style.scss";

type Props = {
  fetchData: (filters: SubmitedValues) => Promise<void>
}

function WeatherForm({ fetchData }: Props): ReactElement | null {
  const [city, setCity] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCity(event.target.value);
  };
  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    fetchData({ cityName: city });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={city} onChange={handleInputChange} placeholder="London..." />
      <button type="submit" disabled={city.length === 0}>
        <img src="../../../../Assets/svg/arrow-right-solid.svg" alt="submit icon" />
      </button>
    </form>
  );
}

WeatherForm.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

export default WeatherForm;
