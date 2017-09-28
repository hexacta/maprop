import { combineReducers } from 'redux';
import filters from './filters';
import map from './map';
import details from './details';

export default combineReducers({
  filters,
  map,
  details
});