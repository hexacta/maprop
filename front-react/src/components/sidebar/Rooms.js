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
					<input type="radio" name="rooms" value="1" defaultChecked={this.props.rooms === '1'} onClick={this.onClick}/> 1
				</div>
				<div>
					<input type="radio" name="rooms" value="2" defaultChecked={this.props.rooms === '2'} onClick={this.onClick}/> 2
				</div>
				<div>
					<input type="radio" name="rooms" value="3" defaultChecked={this.props.rooms === '3'} onClick={this.onClick}/> 3
				</div>
				<div>
					<input type="radio" name="rooms" value="4" defaultChecked={this.props.rooms === '4'} onClick={this.onClick}/> 4
				</div>
				<div>
					<input type="radio" name="rooms" value="5" defaultChecked={this.props.rooms === '5'} onClick={this.onClick}/> 5
				</div>
			</form>
		);
	}
}

export default Rooms;
