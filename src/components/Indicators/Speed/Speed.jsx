import { useEffect, useState } from "react";

const Speed = ({ countCorrect, isOpen, isFinish }) => {
  const initialSpeed = 0;
  const [speed, setSpeed] = useState(initialSpeed);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer;
    if(!isOpen && isFinish) {
      return () => {
        clearInterval(timer);
      }
    }
    if(!isOpen) {
      timer = setInterval(() => changeTime(), 1000);
      return () => {
        clearInterval(timer);
      }      
    } else {
      setSpeed(initialSpeed);
    }
  })

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