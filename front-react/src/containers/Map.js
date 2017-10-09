import { connect } from 'react-redux';
import GoogleMap from './../components/map/GoogleMap';
import { hideDetails, showDetails } from './../actions';

const mapStateToProps = (state) => ({
	polygons: state.map.polygons,
	gmaps: state.map.gmaps
});

const mapDispatchToProps = (dispatch) => ({
	hideDetails: () => dispatch(hideDetails()),
	showDetails: (polygonData, x, y) => dispatch(showDetails(polygonData, x, y))
});

const Map = connect(mapStateToProps,mapDispatchToProps)(GoogleMap);

export default Map;