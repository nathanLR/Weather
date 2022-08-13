import React, { ReactElement, useEffect, useState } from "react";

function Clock(): ReactElement | null {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const intervalID = setInterval(() => { setTime((prev) => prev + 1); }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return <div>{time}</div>;
}

export default Clock;
