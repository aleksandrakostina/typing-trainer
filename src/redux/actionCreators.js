import { fetchGetText } from '../api/apiText';
import { GET_TEXT_INIT, GET_TEXT_SUCCESS, GET_TEXT_ERROR} from './actions';

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
