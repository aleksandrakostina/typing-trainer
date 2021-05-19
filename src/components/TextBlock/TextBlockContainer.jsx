import { useEffect } from "react"
import { connect } from "react-redux";
import { getText } from "../../redux/actionCreators";
import TextBlock from "./TextBlock";

const TextBlockContainer = ({ getText, text, currentLetter, pressedLetter, currentIndex,
  isError }) => {

  useEffect(() => {
    getText();
  }, [getText])

  return (
    <TextBlock text={text} 
                currentLetter={currentLetter} 
                pressedLetter={pressedLetter} 
                currentIndex={currentIndex}
                isError={isError} />
  )
}

const mapStateToProps = (state) => {
  return {
    text: state.text.text,
    currentLetter: state.text.currentLetter,
    pressedLetter: state.value.pressedLetter,
    currentIndex: state.text.currentIndex,
    isError: state.value.isPressError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getText: () => {
      dispatch(getText());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextBlockContainer);