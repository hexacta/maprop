import { connect } from 'react-redux';
import Rooms from './../components/sidebar/Rooms.js';
import { changeRooms } from './../actions';

const mapStateToProps = state => {
	return {
		rooms: state.filters.rooms
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onRoomsClick: rooms => {
			dispatch(changeRooms(rooms))
		}
	};
};

const SidebarRooms = connect(mapStateToProps,mapDispatchToProps)(Rooms);

export default SidebarRooms;
