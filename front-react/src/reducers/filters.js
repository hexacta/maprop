import {
  SET_OPERATION_TYPE,
  SET_ROOMS,
  SET_PROPERTY_TYPE,
  SET_PROPERTY_TYPES,
  SET_SURFACE,
  SET_SURFACE_LIMITS,
  DELETE_OPTIONALS
} from '../constants/actionTypes';

const initialState = {
	operationType: 'rent',
	rooms: '2',
	propertyType: 'Departamento',
	propertyTypes: []
};

const sanitizeSurface = (state) => {
	if(!state.minSurface || state.minSurface < state.surfaceLimits.min){
		state.minSurface = state.surfaceLimits.min;
	}
	if(!state.maxSurface || state.maxSurface > state.surfaceLimits.max){
		state.maxSurface = state.surfaceLimits.max;
	}
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
		case SET_SURFACE:
			newState.minSurface = action.min;
			newState.maxSurface = action.max;
			return newState;
		case SET_SURFACE_LIMITS:
			newState.surfaceLimits = {
				min: action.min,
				max: action.max
			};
			sanitizeSurface(newState);
			return newState;
		case DELETE_OPTIONALS:
			delete newState.surfaceLimits;
			delete newState.minSurface;
			delete newState.maxSurface;
			return newState;
		default:
			return state;
	}
};