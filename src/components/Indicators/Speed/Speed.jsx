import { useEffect, useState } from "react";

const Speed = ({ countCorrect, isOpen, isFinish }) => {
  const initialSpeed = 0;
  const initialTime = 0;
  const [speed, setSpeed] = useState(initialSpeed);
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    let timer;
    if(!isOpen && isFinish) {
      clearInterval(timer);
    } else if(!isOpen) {
      timer = setInterval(() => changeTime(), 1000);
    } else {
      setSpeed(initialSpeed);
      setTime(initialTime);
    }
    return () => {
      clearInterval(timer);
    }
  }, [isOpen, isFinish])

  useEffect(() => {
    if(countCorrect) {
      setSpeed(Math.trunc(countCorrect * 60 / time));
    }
  }, [time, countCorrect])

  const changeTime = () => {
    setTime(prev => prev + 1);
  }

  return (
    <div className="indicators__item">
      <span>Скорость: </span>
      <span>{speed} зн./мин</span>
    </div>
  )
}

export default Speed;