import {
  SET_GMAPS,
  DELETE_POLYGONS,
  REQUEST_POLYGONS,
  SET_POLYGONS
} from '../constants/actionTypes';
import Operations from './../constants/Operations';

const initialState = {
	gmaps: undefined,
	polygons: [],
	loading: false,
	range: {}
};

const calculateBoundaries = (state, operationType) => {
	state.range.max = Math.max(...state.polygons.map(a => a[Operations[operationType].value] || 0));
	state.range.min = Math.min(...state.polygons.map(a => a[Operations[operationType].value] || Number.MAX_SAFE_INTEGER));
	state.polygons.forEach(p => p.scale = (p[Operations[operationType].value] - state.range.min) / (state.range.max - state.range.min));
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state);
	switch (action.type) {
		case SET_GMAPS:
			newState.gmaps = action.gmaps;
			return newState;
		case DELETE_POLYGONS:
			newState.polygons.forEach(polygonData => polygonData.polygon.setMap(null));
			newState.polygons = [];
			return newState;
		case REQUEST_POLYGONS:
			newState.loading = true;
			return newState;
		case SET_POLYGONS:
			newState.polygons = action.polygons;
			newState.loading = false;
			calculateBoundaries(newState, action.operationType);
			return newState;
		default:
			return state;
	}
}