import { connect } from 'react-redux';
import GoogleMap from './../components/map/GoogleMap';
import { hideDetails, showDetails } from './../actions';

const mapStateToProps = (state) => ({
	polygons: state.map.polygons,
	gmaps: state.map.gmaps
});

const mapDispatchToProps = (dispatch) => ({
	hideDetails: () => dispatch(hideDetails()),
	showDetails: (name, value, count, x, y) => dispatch(showDetails(name, value, count, x, y))
});

const Map = connect(mapStateToProps,mapDispatchToProps)(GoogleMap);

export default Map;