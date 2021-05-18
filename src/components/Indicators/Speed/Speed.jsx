import { useEffect, useState } from "react";

const Speed = ({ countCorrect }) => {
  const [speed, setSpeed] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => changeTime(), 1000);
    return () => {
      clearInterval(timer);
    }
  })

  const changeTime = () => {
    setTime(prev => prev + 1);
    if(countCorrect) {
      setSpeed(Math.trunc(countCorrect * 60 / time));
    }
  }

  return (
    <div>
      <div>
        <span>Скорость: </span>
        <span>{speed} зн./мин</span></div>
    </div>
  )
}

export default Speed;