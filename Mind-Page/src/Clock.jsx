import './index.css'
import React, { useState, useEffect } from 'react'

function CLOCKcard() {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [inputMinutes, setInputMinutes] = useState(''); 

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else if (seconds == 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleSetTime = (e) => {
    e.preventDefault();
    const mins = parseInt(inputMinutes, 10);

    if (!isNaN(mins) && mins > 0) {
      setSeconds(mins * 60);
      setIsActive(false);
      setInputMinutes('');
    }
  };

  const formatTime = (totalSeconds) => {
    if (totalSeconds >= 3600) {
      const hours = Math.floor(totalSeconds/3600);
      const mins = Math.floor((totalSeconds % 3600) / 60);
      const secs = totalSeconds % 60;
      return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    } else {
      const mins = Math.floor(totalSeconds / 60);
      const secs = totalSeconds % 60;
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
  }

  const toggle = () => (setIsActive(!isActive));
  const reset = () => {
    setSeconds(60);
    setIsActive(false);
  };

  return (
    <div className="clock-card">
      <h1>TIMER</h1>
      <hr></hr>
      <br></br>
      <form onSubmit={handleSetTime}>
        <input
          type="number"
          min="1"
          placeholder="Enter Minutes"
          value={inputMinutes}
          onChange={(e) => setInputMinutes(e.target.value)}
          disabled={isActive}
          className="clockInput"
        />
        <button type="submit" disabled={isActive} className="clockSetButton">
          Set Time
        </button>
      </form>
      <br></br>
      <h2>Time Remaining: {formatTime(seconds)}</h2>
      <br></br>
      <div>
        <button onClick={toggle} className="clockStartButton">
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={reset} className="clockResetButton">
          Reset
        </button>
      </div>
    </div>
  )
}

export default CLOCKcard
