import loadGoogleMaps from "load-google-maps-api";

import {
  SET_OPERATION_TYPE,
  SET_ROOMS,
  SET_GMAPS,
  DELETE_POLYGONS,
  REQUEST_POLYGONS,
  SET_POLYGONS,
  HIDE_DETAILS,
  SHOW_DETAILS
} from '../constants/actionTypes';

const setOperationType = (operationType) => ({
	type: SET_OPERATION_TYPE,
	operationType
});

const setRooms = (rooms) => ({
	type: SET_ROOMS,
	rooms
});

const deletePolygons = () => ({type: DELETE_POLYGONS});

const requestPolygons = () => ({type: REQUEST_POLYGONS});

const setPolygons = (polygons) => ({
	type: SET_POLYGONS,
	polygons
});

export const hideDetails = () => ({type: HIDE_DETAILS});

export const showDetails = (name, value, count, x, y) => ({
	type: SHOW_DETAILS,
	name,
	value,
	count,
	x,
	y
});

export const setGmaps = (gmaps) => ({
	type: SET_GMAPS,
	gmaps
});

export const loadPolygons = () => {
	return (dispatch, getState) => {
		let operationType = getState().filters.operationType;
		let rooms = getState().filters.rooms;
		dispatch(requestPolygons());
		let url = 'http://localhost:4003/data/' + operationType + (rooms ? '?rooms=' + rooms : '');
		return fetch(url).then(response => response.json()).then(polygons => {
			dispatch(deletePolygons());
			dispatch(setPolygons(polygons));
		});
	};
};

export const loadGMaps = () => {
	return (dispatch) => {
		loadGoogleMaps({key: 'AIzaSyB6cuVrCJvwyNos7SsUWZ0D1UjiwwvmiZM'}).then(gmaps => dispatch(setGmaps(gmaps)));
	};
};

export const changeOperationType = (operationType) => {
	return (dispatch) => {
		dispatch(setOperationType(operationType));
		dispatch(loadPolygons());
	};
};

export const changeRooms = (rooms) => {
	return (dispatch) => {
		dispatch(setRooms(rooms));
		dispatch(loadPolygons());
	};
};