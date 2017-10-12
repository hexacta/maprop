import { combineReducers } from 'redux';
import filters from './filters';
import map from './map';
import details from './details';
import information from './information';

export default combineReducers({
  filters,
  map,
  details,
  information
});