import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setPressedValue, setCurrentLetter, getResult, setNextIndex, pressError } from '../../redux/actionCreators';
import './InputForm.css';

const InputForm = ({ value, setPressedValue, text, currentLetter, currentIndex, 
  setCurrentLetter, getResult, setNextIndex, pressError }) => {

  useEffect(() => {
    const onKeypress = (e) => {
      setPressedValue(e.key);
      if(e.key === currentLetter && currentLetter !== undefined && currentLetter !== null) {
        if(currentIndex < text.length) {
          setNextIndex();
          if(currentIndex === text.length - 1) {
            getResult();
          }
        }
      } else {
        pressError();
      }
    }

    document.addEventListener('keypress', onKeypress);

    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, [setPressedValue, currentLetter, text, currentIndex, getResult, pressError, setNextIndex])

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
    currentIndex: state.text.currentIndex
  }
}

const mapDispatchToProps = (dispath) => {
  return {
    setPressedValue: (value) => {
      dispath(setPressedValue(value));
    },
    setCurrentLetter: (val) => {
      dispath(setCurrentLetter(val));
    },
    getResult: () => {
      dispath(getResult());
    },
    setNextIndex: () => {
      dispath(setNextIndex());
    },
    pressError: () => {
      dispath(pressError());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);