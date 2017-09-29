import React from 'react';
import PropTypes from 'prop-types';
import { RATIO } from './../../constants/Operations';
import { LOCALE } from './../../constants/Config';
import './DetailsPopup.css';

const X_OFFSET = 50;
const Y_OFFSET = -20;

const formatValue = (value, operationType) => {
	if(!value){
		return '';
	}
	if(operationType === RATIO){
		return value.toLocaleString(LOCALE);
	}
	else{
		return '$ ' + value.toLocaleString(LOCALE);
	}
};

const DetailsPopup = (props) => {
	let style = {
		top: props.y + Y_OFFSET + 'px', 
		left: props.x + X_OFFSET + 'px', 
		visibility: props.show ? 'visible':'hidden'
	};
	let value = formatValue(props.value, props.operationType);
	return (
		<div className="Details" style={style}>
			<div>
				<label>Barrio: </label>
				<span>{props.name}</span>
			</div>
			<div>
				<strong>{value}</strong>
			</div>
			<div>
				<label>Cantidad de propiedades: </label>
				<span>{props.count}</span>
			</div>
		</div>
	);
};

DetailsPopup.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.number,
	count: PropTypes.number.isRequired,
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	show: PropTypes.bool.isRequired
};

export default DetailsPopup;
