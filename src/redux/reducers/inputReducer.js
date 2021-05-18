import { SET_COUNT_CORRECT, SET_COUNT_TYPOS, SET_ERROR, SET_PRESSED_VALUE } from './../actions';

const initialState = {
  value: '',
  pressedLetter: '',
  isError: false,
  countCorrect: 0,
  countTypos: 0
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
    case SET_COUNT_TYPOS:
      return {
        ...state,
        countTypos: state.countTypos + 1
      }
    case SET_COUNT_CORRECT:
      return {
        ...state,
        countCorrect: state.countCorrect + 1
      }
    default:
      return state;
  }
}