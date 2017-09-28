import { combineReducers } from 'redux';
import filters from './filters';
import map from './map';

export default combineReducers({
  filters,
  map
});