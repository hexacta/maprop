import {
  HIDE_DETAILS,
  SHOW_DETAILS
} from '../constants/actionTypes';

const initialState = {
	polygonData: {
		name: '',
		value: '',
		dollarValue: '',
		count: 0
	},
	x: 0,
	y: 0,
	show: false
};

export default (state = initialState, action) => {
	let newState = Object.assign({}, state);
	switch (action.type) {
		case HIDE_DETAILS:
			newState.show = false;
			return newState;
		case SHOW_DETAILS:
			newState.polygonData = action.polygonData;
			newState.x = action.x;
			newState.y = action.y;
			newState.show = true;
			return newState;
		default:
			return state;
	}
}