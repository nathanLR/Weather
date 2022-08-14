import React, { ReactElement, useEffect, useState } from "react";
// style
import "./Clock.style.scss";

function Clock(): ReactElement | null {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return <div className="Clock">{`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}</div>;
}

export default Clock;
