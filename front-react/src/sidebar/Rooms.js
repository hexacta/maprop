import React, { Component } from 'react';
import './Rooms.css';

class Rooms extends Component {
	constructor(props){
		super(props);
		this.state = {number: 1};
		this.setRooms = this.setRooms.bind(this);
	}
	setRooms(event){
		this.setState({number: event.target.value});
	}
	render() {
		return (
			<form className="Rooms">
				<h2>Ambientes</h2>
				<div>
					<input type="radio" name="rooms" value="1" defaultChecked onClick={this.setRooms}/> 1
				</div>
				<div>
					<input type="radio" name="rooms" value="2" onClick={this.setRooms}/> 2
				</div>
				<div>
					<input type="radio" name="rooms" value="3" onClick={this.setRooms}/> 3
				</div>
				<div>
					<input type="radio" name="rooms" value="4" onClick={this.setRooms}/> 4
				</div>
				<div>
					<input type="radio" name="rooms" value="5" onClick={this.setRooms}/> 5
				</div>
			</form>
		);
	}
}

export default Rooms;
