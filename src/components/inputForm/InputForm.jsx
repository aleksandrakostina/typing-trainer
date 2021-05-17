import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setPressedValue, setIndex, setCurrentLetter, setError } from '../../redux/actionCreators';
import './InputForm.css';

const InputForm = ({ value, setPressedValue, text, currentLetter, setIndex, idx, 
  setCurrentLetter, setError }) => {

  useEffect(() => {
    const onKeypress = (e) => {
      setPressedValue(e.key);
      if(e.key === currentLetter && currentLetter !== undefined && currentLetter !== null) {
        if(idx < text.length - 1) {
          setIndex(idx + 1);
          setError(false);
        }
      } else {
        setError(true);
      }
    }

    document.addEventListener('keypress', onKeypress);

    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, [setPressedValue, currentLetter])

  useEffect(() => {
    setCurrentLetter(text[idx]);
  }, [idx, setCurrentLetter, text])

  return (  
    <input className="input_invisible" value={value.join('')} />
  )
}

const mapStateToProps = (state) => {
  return {
    value: state.value.value,
    text: state.text.text,
    currentLetter: state.text.currentLetter,
    pressedLetter: state.value.pressedLetter,
    idx: state.text.idx
  }
}

const mapDispatchToProps = (dispath) => {
  return {
    setPressedValue: (value) => {
      dispath(setPressedValue(value));
    },
    setIndex: (idx) => {
      dispath(setIndex(idx));
    },
    setCurrentLetter: (val) => {
      dispath(setCurrentLetter(val));
    },
    setError: (value) => {
      dispath(setError(value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);