import { connect } from "react-redux";
import Speed from "./Speed/Speed";
import Accuracy from "./Accuracy/Accuracy";
import { openModal, restart } from "../../redux/actionCreators";
import Restart from "./Restart/Restart";
import "./Indicators.css";

const Indicators = ({ countCorrect, text, isError, isLoading, restart, isOpen, isFinish }) => {

  if(isLoading) {
    return null;
  }

  return (
    <div className="indicators"> 
      <Speed countCorrect={countCorrect} isOpen={isOpen} isFinish={isFinish} />
      <Accuracy length={text.length} isError={isError} isOpen={isOpen} isFinish={isFinish} />
      <Restart  restart={restart} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    text: state.text.text,
    countCorrect: state.value.countCorrect,
    isError: state.value.isPressError,
    isLoading: state.text.isLoading,
    isOpen: state.modal.isOpen,
    isFinish: state.value.isFinish
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => {
      dispatch(openModal());
    },
    restart: () => {
      dispatch(restart());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Indicators);