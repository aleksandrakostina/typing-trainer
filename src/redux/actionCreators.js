import { fetchGetText } from '../api/apiText';
import { GET_TEXT_INIT, GET_TEXT_SUCCESS, GET_TEXT_ERROR, SET_PRESSED_VALUE, 
  SET_CURRENT_LETTER, 
  SET_INDEX,
  SET_ERROR,
  SET_COUNT_CORRECT,
  SET_COUNT_TYPOS} from './actions';

const getTextInit = () => ({ type: GET_TEXT_INIT });

const getTextSuccess = (text) => ({ type: GET_TEXT_SUCCESS, text: text });

const getTextError = () => ({ type: GET_TEXT_ERROR });

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

export const setIndex = () => ({ type: SET_INDEX });

export const setError = (value) => ({ type: SET_ERROR, value });

export const setCountCorrect = () => ({ type: SET_COUNT_CORRECT });

export const setCountTypos = () => ({ type: SET_COUNT_TYPOS });