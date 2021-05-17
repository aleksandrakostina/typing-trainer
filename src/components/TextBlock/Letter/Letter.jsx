import './Letter.css';

const Letter = ({ letter, className }) => {
  return (
    <span className={className}>{letter}</span>
  )
}

export default Letter;