import React, { Component } from 'react';
import './OperationType.css';

class OperationType extends Component {
	constructor(props){
		super(props);
		this.state = {mode: 'ratio'};
		this.setOperationType = this.setOperationType.bind(this);
	}
	setOperationType(event){
		this.setState({mode: event.target.value});
	}
	render() {
		return (
		    <form className="OperationType">
		    	<h2>Tipo de operaci&oacute;n</h2>
		    	<div>
			    	<input type="radio" name="mode" value="ratio" defaultChecked onClick={this.setOperationType}/> Venta/Alquiler
			    </div>
			    <div>
			    	<input type="radio" name="mode" value="rent" onClick={this.setOperationType}/> Alquiler
			    </div>
			    <div>
			    	<input type="radio" name="mode" value="price" onClick={this.setOperationType}/> Venta
			    </div>
			</form>
		);
	}
}

export default OperationType;
