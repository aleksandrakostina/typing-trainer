import { fetchGetText } from '../api/apiText';
import { GET_TEXT_INIT, GET_TEXT_SUCCESS, GET_TEXT_ERROR, SET_PRESSED_VALUE, 
  SET_CURRENT_LETTER, RESET_STATE, OPEN_MODAL, CLOSE_MODAL, GET_RESULT, 
  SET_NEXT_INDEX, PRESS_ERROR } from './actions';

const getTextInit = () => ({ type: GET_TEXT_INIT });

const getTextSuccess = (text) => ({ type: GET_TEXT_SUCCESS, text: text });

const getTextError = (payload) => ({ type: GET_TEXT_ERROR, payload });

export const getText = () => {
  return (dispatch) => {
    dispatch(getTextInit());
    fetchGetText()
    .then(text => {
      dispatch(getTextSuccess(text))
    })
    .catch(e => {
      dispatch(getTextError('Oppps! Something went wrong'));
    })
  }
}

export const setPressedValue = (value) => ({ type: SET_PRESSED_VALUE, value });

export const setCurrentLetter = (value) => ({ type: SET_CURRENT_LETTER, value });

export const openModal = () => ({ type: OPEN_MODAL });

export const closeModal = () => ({ type: CLOSE_MODAL });

export const resetState = () => ({ type: RESET_STATE });

export const restart = () => {
  return (dispatch) => {
    dispatch(resetState());
    dispatch(openModal());
  }
}

export const getResult = () => ({ type: GET_RESULT });

export const setNextIndex = () => ({ type: SET_NEXT_INDEX });

export const pressError = () => ({ type: PRESS_ERROR });