import "./Modal.css";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
       <div className="modal__dialog">
        <div className="modal__content">     
          <div className="modal__body">
            <p>Приготовься печатать. Поехали!</p>
          </div>
          <div className="modal__footer">
            <button type="button" 
                    className="btn" 
                    onClick={closeModal}>НАЧАТЬ ПЕЧАТАТЬ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;