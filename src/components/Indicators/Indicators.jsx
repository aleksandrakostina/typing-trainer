import { connect } from "react-redux";
import Speed from "./Speed/Speed";
import Accuracy from "./Accuracy/Accuracy";

const Indicators = ({ countCorrect, text, isError }) => {
  return (
    <>
    <Speed countCorrect={countCorrect} />
    <Accuracy length={text.length} isError={isError} />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    text: state.text.text,
    countCorrect: state.value.countCorrect,
    isError: state.value.isError
  }
}

export default connect(mapStateToProps)(Indicators);