import {
  SET_GMAPS,
  DELETE_POLYGONS,
  REQUEST_POLYGONS,
  SET_POLYGONS
} from '../constants/actionTypes';

const initialState = {
	gmaps: undefined,
	polygons: [],
	loading: false
};

const calculateBoundaries = (state) => {
	let max = Math.max(...state.polygons.map(a => a.value || 0));
	let min = Math.min(...state.polygons.map(a => a.value || Number.MAX_SAFE_INTEGER));
	state.polygons.forEach(p => p.scale = (p.value - min) / (max - min));
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
			calculateBoundaries(newState);
			return newState;
		default:
			return state;
	}
}