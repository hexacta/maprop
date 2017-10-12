import {
  SET_INFORMATION
} from '../constants/actionTypes';

const initialState = {
	count: 0
};

export default (state = initialState, action) => {
	let newState = Object.assign({}, state);
	switch (action.type) {
		case SET_INFORMATION:
			newState.count = action.count;
			newState.dollarConversionRate = action.dollarConversionRate;
			return newState;
		default:
			return state;
	}
};