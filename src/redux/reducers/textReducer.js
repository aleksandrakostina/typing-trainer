import { GET_TEXT_INIT, GET_TEXT_SUCCESS, GET_TEXT_ERROR, SET_CURRENT_LETTER, RESET_STATE, 
  SET_NEXT_INDEX} from './../actions';

const initialState = {
  text: '',
  error: '',
  currentLetter: '',
  currentIndex: 0,
  isLoading: false
}

export const textReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_TEXT_INIT:
      return {
        ...state,
        isLoading: true
      }
    case GET_TEXT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        text: action.text[0]
      }
    case GET_TEXT_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    case SET_CURRENT_LETTER:
      return {
        ...state,
        currentLetter: action.value
      }
    case SET_NEXT_INDEX:
      return {
        ...state,
        currentIndex: state.currentIndex + 1
      }
    case RESET_STATE:
      return {
        ...initialState
      }
    default:
      return state;
  }
}