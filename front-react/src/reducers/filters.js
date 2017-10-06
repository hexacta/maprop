import {
  SET_OPERATION_TYPE,
  SET_ROOMS,
  SET_PROPERTY_TYPE,
  SET_PROPERTY_TYPES
} from '../constants/actionTypes';

const initialState = {
	operationType: 'ratio',
	rooms: '1',
	propertyType: 'Departamento',
	propertyTypes: []
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
		default:
			return state;
	}
}