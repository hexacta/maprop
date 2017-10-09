import React from 'react';
import PropTypes from 'prop-types';
import Operations from './../../constants/Operations';
import { LOCALE } from './../../constants/Config';
import './DetailsPopup.css';

const X_OFFSET = 50;
const Y_OFFSET = -20;

const formatValue = (polygonData, operationType) => {
	if(!polygonData){
		return '';
	}
	let value = polygonData[Operations[operationType].value];
	if(!value){
		return '';
	}
	return Operations[operationType].unit + value.toLocaleString(LOCALE);
};

const DetailsPopup = (props) => {
	let style = {
		top: props.y + Y_OFFSET + 'px', 
		left: props.x + X_OFFSET + 'px', 
		visibility: props.show ? 'visible':'hidden'
	};
	let value = formatValue(props.polygonData, props.operationType);
	let name = props.polygonData ? props.polygonData.name : '';
	let count = props.polygonData ? props.polygonData.count : 0;
	return (
		<div className="Details" style={style}>
			<div>
				<label>Barrio: </label>
				<span>{name}</span>
			</div>
			<div>
				<strong>{value}</strong>
			</div>
			<div>
				<label>Cantidad de propiedades: </label>
				<span>{count}</span>
			</div>
		</div>
	);
};

DetailsPopup.propTypes = {
	polygonData: PropTypes.object,
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	show: PropTypes.bool.isRequired
};

export default DetailsPopup;
