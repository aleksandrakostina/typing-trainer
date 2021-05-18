import { connect } from "react-redux";
import Speed from "./Speed/Speed"

const Indicators = ({ countCorrect }) => {
  return (
    <Speed countCorrect={countCorrect} />
  )
}

const mapStateToProps = (state) => {
  return {
    countCorrect: state.value.countCorrect
  }
}

export default connect(mapStateToProps)(Indicators);