import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setPressedValue, setIndex, setCurrentLetter, setError, setCountCorrect, setCountTypos } from '../../redux/actionCreators';
import './InputForm.css';

const InputForm = ({ value, setPressedValue, text, currentLetter, setIndex, currentIndex, 
  setCurrentLetter, setError, setCountCorrect, setCountTypos }) => {

  useEffect(() => {
    const onKeypress = (e) => {
      setPressedValue(e.key);
      if(e.key === currentLetter && currentLetter !== undefined && currentLetter !== null) {
        if(currentIndex < text.length - 1) {
          setIndex();
          setError(false);
          setCountCorrect();
        }
      } else {
        setError(true);
        setCountTypos();
      }
    }

    document.addEventListener('keypress', onKeypress);

    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, [setPressedValue, currentLetter, setIndex, setError, setCountTypos, text, currentIndex, setCountCorrect])

  useEffect(() => {
    setCurrentLetter(text[currentIndex]);
  }, [currentIndex, setCurrentLetter, text])

  return (  
    <input className="input_invisible" value={value} />
  )
}

const mapStateToProps = (state) => {
  return {
    value: state.value.value,
    text: state.text.text,
    currentLetter: state.text.currentLetter,
    pressedLetter: state.value.pressedLetter,
    currentIndex: state.text.currentIndex,
    countCorrect: state.value.countCorrect,
    countTypos: state.value.countTypos
  }
}

const mapDispatchToProps = (dispath) => {
  return {
    setPressedValue: (value) => {
      dispath(setPressedValue(value));
    },
    setIndex: () => {
      dispath(setIndex());
    },
    setCurrentLetter: (val) => {
      dispath(setCurrentLetter(val));
    },
    setError: (value) => {
      dispath(setError(value));
    },
    setCountCorrect: () => {
      dispath(setCountCorrect());
    },
    setCountTypos: () => {
      dispath(setCountTypos());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);