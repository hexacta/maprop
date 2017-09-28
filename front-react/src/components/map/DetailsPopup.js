import React from 'react';
import PropTypes from 'prop-types';
import './DetailsPopup.css';

const X_OFFSET = 50;
const Y_OFFSET = -20;

const DetailsPopup = ({name, value, count, x, y, show}) => {
	let style = {
		top: y + Y_OFFSET + 'px', 
		left: x + X_OFFSET + 'px', 
		visibility: show ? 'visible':'hidden'
	};
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
	name: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
	count: PropTypes.number.isRequired,
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	show: PropTypes.bool.isRequired
};

export default DetailsPopup;
