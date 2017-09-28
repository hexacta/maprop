import { connect } from 'react-redux';
import Rooms from './../components/sidebar/Rooms.js';
import { changeRooms } from './../actions';

const mapStateToProps = (state) => ({rooms: state.filters.rooms});

const mapDispatchToProps = (dispatch) => ({
	onRoomsClick: (rooms) => dispatch(changeRooms(rooms))
});

const SidebarRooms = connect(mapStateToProps,mapDispatchToProps)(Rooms);

export default SidebarRooms;