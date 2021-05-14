import { useEffect } from "react"
import { connect } from "react-redux";
import { getText } from "../../redux/actionCreators";
import TextBlock from "./TextBlock";

const TextBlockContainer = ({ getText, text }) => {

  useEffect(() => {
    getText();
  }, [getText])

  return (
    <TextBlock text={text} />
  )
}

const mapStateToProps = (state) => {
  return {
    text: state.text.text
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