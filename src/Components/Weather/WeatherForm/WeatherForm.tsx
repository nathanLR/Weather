import React, { ReactElement, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { SubmitedValues } from "../../../Utils/Types";
// styles
import "./WeatherForm.style.scss";

function Countdown({ countdownFinished }: { countdownFinished: () => void}) {
  const [countdown, setcountdown] = useState<number>(5000);
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (countdown !== 0) {
        setcountdown((prev) => prev - 500);
      }
      if (countdown === 0) {
        countdownFinished();
      }
    }, 500);
    return () => clearInterval(myInterval);
  }, [countdown]);
  return <span className="countdown"><span className="countdown__progressbar" style={{ height: `${(countdown * 100) / 5000}%` }} /></span>;
}

type Props = {
  fetchData: (filters: SubmitedValues) => Promise<void>
}

function WeatherForm({ fetchData }: Props): ReactElement | null {
  const [city, setCity] = useState<string>("");
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  const countdownFinished = () => {
    setHasSubmitted(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCity(event.target.value);
  };
  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    setHasSubmitted(true);
    fetchData({ cityName: city });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={city} onChange={handleInputChange} placeholder="London..." />
      <button type="submit" disabled={city.length === 0 || hasSubmitted === true}>
        <img src="http://lena4945.odns.fr/Assets/svg/arrow-right-solid.svg" alt="submit icon" />
      </button>
      {
        hasSubmitted ? <Countdown countdownFinished={countdownFinished} /> : ""
      }
    </form>
  );
}

WeatherForm.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

export default WeatherForm;
