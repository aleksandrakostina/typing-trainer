import { useEffect, useState } from "react";

const Accuracy = ({ length, isError, isOpen, isFinish }) => {
  const initialAccuracy = 100;
  const [accuracy, setAccuracy] = useState(initialAccuracy);
  const step = 100 / length;

  useEffect(() => {
    if(isError && !isFinish) {
      setAccuracy(prev => prev - step);
    }
  }, [isError, step, isFinish])

  useEffect(() => {
    if(isOpen) {
      setAccuracy(initialAccuracy);
    }
  }, [isOpen])

  return (
    <div className="indicators__item">
      <span>Точность: </span>
      <span>{accuracy.toFixed(1)} %</span>
    </div>
  )
}

export default Accuracy;