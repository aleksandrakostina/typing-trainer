import Letter from "./Letter/Letter";

const TextBlock = ({ text, currentIndex, isError }) => {

  return (
    <div>
      {text.split('').map((letter, i) => (
        <Letter className={i === text.split('').length - 1 && i === currentIndex ? "passed-text" : 
            currentIndex === i && !isError ? "green" : 
            currentIndex === i && isError ? "red" :
            currentIndex > i ? "passed-text" : "black"} letter={letter} />
      ))}
    </div>
  )
}

export default TextBlock;