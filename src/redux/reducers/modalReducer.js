import { CLOSE_MODAL, OPEN_MODAL } from './../actions';

const initialState = {
  isOpen: true
}

export const modalReducer = (state = initialState, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true
      }
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false
      }
    default:
      return state;
  }
}