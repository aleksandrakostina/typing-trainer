import { useState } from 'react';
import './InputForm.css';

const InputForm = () => {
  const [inputValue, setInputValue] = useState();

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <form>
      <input className="input_invisible" onChange={handleChangeInput} value={inputValue} />
    </form>
  )
}

export default InputForm;