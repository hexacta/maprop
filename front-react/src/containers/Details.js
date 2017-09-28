import { connect } from 'react-redux';
import DetailsPopup from './../components/map/DetailsPopup.js';

const mapStateToProps = (state) => ({
	name: state.details.name,
	value: state.details.value,
	count: state.details.count,
	x: state.details.x,
	y: state.details.y,
	show: state.details.show
});

const Details = connect(mapStateToProps)(DetailsPopup);

export default Details;
