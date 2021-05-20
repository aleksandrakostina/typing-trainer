import { connect } from "react-redux";
import Indicators from "../Indicators/Indicators";
import InputForm from "../inputForm/InputForm";
import ModalContainer from "../Modal/ModalContainer";
import TextBlockContainer from "../TextBlock/TextBlockContainer";

const HomePage = ({ error }) => {
  if(error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <InputForm />
      <TextBlockContainer />
      <Indicators />
      <ModalContainer />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    error: state.text.error
  }
}

export default connect(mapStateToProps)(HomePage);