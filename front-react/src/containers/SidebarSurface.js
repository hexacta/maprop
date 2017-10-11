import { connect } from 'react-redux';
import Surface from './../components/sidebar/Surface.js';
import { changeSurface, loadPolygons } from './../actions';

const mapStateToProps = (state) => ({
	min: state.filters.minSurface,
	max: state.filters.maxSurface
});

const mapDispatchToProps = (dispatch) => ({
	onSurfaceChange: (min, max) => dispatch(changeSurface(min, max)),
	onSurfaceSet: (min, max) => dispatch(loadPolygons())
});

const SidebarSurface = connect(mapStateToProps, mapDispatchToProps)(Surface);

export default SidebarSurface;