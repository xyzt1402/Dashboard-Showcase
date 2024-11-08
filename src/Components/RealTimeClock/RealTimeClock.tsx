import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import customStyle from "./RealTimeClock.module.scss";

const RealTimeClock = () => {
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);
  return (
    <div className={customStyle.clockContainer}>
      <p>{currentTime.format("HH")}</p>
      <p>:</p>
      <p>{currentTime.format("mm")}</p>
      <p>:</p>
      <p>{currentTime.format("ss")}</p>
    </div>
  );
};

export default RealTimeClock;
