import { useEffect, useState } from "react";

const Accuracy = ({ length, isError }) => {
  console.log(isError)
  const [accuracy, setAccuracy] = useState(100);
  const step = 100 / length;

  useEffect(() => {
    if(isError) {
      setAccuracy(prev => prev - step);
    }
  }, [isError])

  return (
    <div>
      <div>
        <span>Точность: </span>
        <span>{accuracy.toFixed(1)} %</span></div>
    </div>
  )
}

export default Accuracy;