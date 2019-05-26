import { combineReducers } from 'redux';
import currencies, { inputs } from './currencies';
import themes from './themes';
export default combineReducers({
  currencies,
  themes,
  inputs
});
