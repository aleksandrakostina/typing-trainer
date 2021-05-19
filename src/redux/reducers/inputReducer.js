import { GET_RESULT, PRESS_ERROR, RESET_STATE, SET_NEXT_INDEX, SET_PRESSED_VALUE } from './../actions';

const initialState = {
  value: '',
  pressedLetter: '',
  isPressError: false,
  countCorrect: 0,
  isFinish: false
}

export const inputReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PRESSED_VALUE:
      return {
        ...state,
        value: [...state.value, action.value].join(''),
        pressedLetter: action.value
      }
    case RESET_STATE:
      return {
        ...initialState
      }
    case GET_RESULT:
      return {
        ...state,
        isFinish: true
      }
    case SET_NEXT_INDEX:
      return {
        ...state,
        countCorrect: state.countCorrect + 1,
        isPressError: false
      }
    case PRESS_ERROR:
      return {
        ...state,
        isPressError: true
      }
    default:
      return state;
  }
}