import {
  SET_OPERATION_TYPE,
  SET_ROOMS
} from '../constants/actionTypes';

const initialState = {
	operationType: 'ratio',
	rooms: '1'
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
		default:
			return state;
	}
}