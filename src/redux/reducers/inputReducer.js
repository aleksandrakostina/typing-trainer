import { SET_ERROR, SET_PRESSED_VALUE } from './../actions';

const initialState = {
  value: '',
  pressedLetter: '',
  isError: false
}

export const inputReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PRESSED_VALUE:
      return {
        ...state,
        value: [...state.value, action.value],
        pressedLetter: action.value
      }
    case SET_ERROR:
      return {
        ...state,
        isError: action.value
      }
    default:
      return state;
  }
}