import { GET_TEXT_INIT, GET_TEXT_SUCCESS, GET_TEXT_ERROR, SET_CURRENT_LETTER, SET_INDEX } from './../actions';

const initialState = {
  text: '',
  error: '',
  currentLetter: '',
  idx: 0
}

export const textReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_TEXT_INIT:
      return {
        ...state,

      }
    case GET_TEXT_SUCCESS:
      return {
        ...state,
        text: action.text[0]
      }
    case GET_TEXT_ERROR:
      return {
        ...state,
        
      }
    case SET_CURRENT_LETTER:
      return {
        ...state,
        currentLetter: action.value
      }
    case SET_INDEX:
      return {
        ...state,
        idx: action.idx
      }
    default:
      return state;
  }
}