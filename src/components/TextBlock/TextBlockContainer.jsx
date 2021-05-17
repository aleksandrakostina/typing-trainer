import { useEffect } from "react"
import { connect } from "react-redux";
import { getText, setCurrentLetter } from "../../redux/actionCreators";
import TextBlock from "./TextBlock";

const TextBlockContainer = ({ getText, text, currentLetter, pressedLetter, setCurrentLetter, idx, 
  isError }) => {

  useEffect(() => {
    getText();
  }, [getText])

  useEffect(() => {
    setCurrentLetter(text.split('')[0]);
  }, [text, setCurrentLetter])

  return (
    <TextBlock text={text} 
                currentLetter={currentLetter} 
                pressedLetter={pressedLetter} 
                idx={idx}
                isError={isError} />
  )
}

const mapStateToProps = (state) => {
  return {
    text: state.text.text,
    currentLetter: state.text.currentLetter,
    pressedLetter: state.value.pressedLetter,
    idx: state.text.idx,
    isError: state.value.isError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getText: () => {
      dispatch(getText());
    },
    setCurrentLetter: (value) => {
      dispatch(setCurrentLetter(value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextBlockContainer);