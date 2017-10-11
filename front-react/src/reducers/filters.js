import {
  SET_OPERATION_TYPE,
  SET_ROOMS,
  SET_PROPERTY_TYPE,
  SET_PROPERTY_TYPES,
  SET_SURFACE_BOUNDARIES
} from '../constants/actionTypes';

const initialState = {
	operationType: 'rent',
	rooms: '2',
	propertyType: 'Departamento',
	propertyTypes: [],
	minSurface: 0,
	maxSurface: 500
};

export default (state = initialState, action) => {
	let newState = Object.assign({}, state);
	switch (action.type) {
		case SET_OPERATION_TYPE:
			newState.operationType = action.operationType;
			return newState;
		case SET_ROOMS:
			newState.rooms = action.rooms;
			return newState;
		case SET_PROPERTY_TYPE:
			newState.propertyType = action.propertyType;
			return newState;
		case SET_PROPERTY_TYPES:
			newState.propertyTypes = action.propertyTypes;
			return newState;
		case SET_SURFACE_BOUNDARIES:
			newState.minSurface = action.min;
			newState.maxSurface = action.max;
			return newState;
		default:
			return state;
	}
}