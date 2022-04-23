import React, { useState } from "react";
import "./style.css";

const Clock = () => {

  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let am = "AM";

  const [htime, setHtime] = useState(hour);
  const [mtime, setMtime] = useState(minute);
  const [stime, setStime] = useState(seconds);
  const [ampm, setAMPM] = useState(am);
  
  const updateTime = () => {
    am="AM";
    hour = new Date().getHours();
    minute = new Date().getMinutes();
    seconds = new Date().getSeconds();
    am = (hour>12)? (hour = hour-12, am ="PM") : hour ;
    hour = (hour<10) ? `0${hour}`:hour;
    minute = (minute<10) ? `0${minute}`:minute;
    seconds = (seconds<10) ? `0${seconds}`:seconds;
    setHtime(hour);
    setMtime(minute);
    setStime(seconds);
    setAMPM(am);
  };

  setInterval(updateTime, 1000);


  return (
    <>
      <div className="clock">
        <h1>The Time is now</h1>
        <div className="time">
          <div>
            <span className="hour">{htime}</span>
            <span>Hours</span>
          </div>
          <div>
            <span className="hour">{mtime}</span>
            <span>Minutes</span>
          </div>
          <div>
            <span className="hour">{stime}</span>
            <span>seconds</span>
          </div>
          <div>
            <span className="ampm">{ampm}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Clock;
