import { connect } from 'react-redux';
import GoogleMap from './../components/map/GoogleMap.js';

const mapStateToProps = (state) => {
	return {
		polygons: state.map.polygons,
		gmaps: state.map.gmaps
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

const Map = connect(mapStateToProps,mapDispatchToProps)(GoogleMap);

export default Map;
