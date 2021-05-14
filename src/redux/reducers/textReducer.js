import { GET_TEXT_INIT, GET_TEXT_SUCCESS, GET_TEXT_ERROR } from './../actions';

const initialState = {
  text: '',
  error: ''
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
    default:
      return state;
  }
}