import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Rooms.css';

class Rooms extends Component {
	static propTypes = {
		rooms: PropTypes.string,
		onRoomsClick: PropTypes.func.isRequired
	};
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}
	onClick(event){
		this.props.onRoomsClick(event.target.value);
	}
	render() {
		return (
			<form className="Rooms">
				<h2>Ambientes</h2>
				<div>
					<div>{this.props.rooms}</div>
					<input type="range" min="1" max="5" step="1" value={this.props.rooms} onChange={this.onClick} list="tickmarks"/>
				</div>
			</form>
		);
	}
}

export default Rooms;
