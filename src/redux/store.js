import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { textReducer } from './reducers/textReducer';
import { inputReducer } from './reducers/inputReducer';

const reducers = combineReducers({
  text: textReducer,
  value: inputReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export default store;