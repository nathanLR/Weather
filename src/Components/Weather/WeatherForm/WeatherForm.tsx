import React, { ReactElement, useState } from "react";
import PropTypes from "prop-types";
import { SubmitedValues } from "../../../Utils/Types";

type Props = {
  fetchData: (filters: SubmitedValues) => Promise<void>
}

function WeatherForm({ fetchData }: Props): ReactElement | null {
  const [city, setCity] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCity(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault();
    fetchData({ cityName: city });
  };

  return (
    <form>
      <input type="text" value={city} onChange={handleInputChange} />
      <input type="submit" onClick={handleSubmit} />
    </form>
  );
}

WeatherForm.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

export default WeatherForm;
