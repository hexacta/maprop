import React from 'react';
import { connect } from 'react-redux';
import './Information.css';

let Information = ({count, dollarConversionRate}) => {
	return (
		<div className="Information">
			<h3>Cantidad de propiedades</h3>
			<span>{count}</span>
			<h3>Cotizaci&oacute;n del dolar</h3>
			<span>$ {dollarConversionRate}</span>
		</div>
	);
};

Information = connect((state) => ({
	count: state.information.count,
	dollarConversionRate: state.information.dollarConversionRate
}))(Information);

export default Information;