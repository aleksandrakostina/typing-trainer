import { connect } from "react-redux";
import { closeModal } from "../../redux/actionCreators";
import Modal from "./Modal"

const ModalContainer = ({ isOpen, closeModal, isLoading }) => {
  return (
    <>
      {isOpen && !isLoading && <Modal closeModal={closeModal} />}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.modal.isOpen,
    isLoading: state.text.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch(closeModal());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);