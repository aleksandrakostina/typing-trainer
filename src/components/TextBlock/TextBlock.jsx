import Letter from "./Letter/Letter";

const TextBlock = ({ text, idx, isError }) => {

  return (
    <div>
      {text.split('').map((letter, i) => (
        <Letter className={idx === i && !isError ? "green" : idx === i && isError ? "red" : idx > i ? "passed-text" : "black"} letter={letter} />
      ))}
    </div>
  )
}

export default TextBlock;