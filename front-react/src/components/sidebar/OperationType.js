import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RENT, RATIO, PRICE } from './../../constants/Operations';
import './OperationType.css';

class OperationType extends Component {
	static propTypes = {
		operationType: PropTypes.string.isRequired,
		onOperationTypeClick: PropTypes.func.isRequired
	};
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}
	onClick(event){
		this.props.onOperationTypeClick(event.target.value);
	}
	render() {
		return (
		    <form className="OperationType">
		    	<h2>Tipo de operaci&oacute;n</h2>
		    	<div>
			    	<input type="radio" name="mode" value={RATIO} defaultChecked={this.props.operationType === RATIO} onClick={this.onClick}/> Venta/Alquiler
			    </div>
			    <div>
			    	<input type="radio" name="mode" value={RENT} defaultChecked={this.props.operationType === RENT} onClick={this.onClick}/> Alquiler
			    </div>
			    <div>
			    	<input type="radio" name="mode" value={PRICE} defaultChecked={this.props.operationType === PRICE} onClick={this.onClick}/> Venta
			    </div>
			</form>
		);
	}
}

export default OperationType;
