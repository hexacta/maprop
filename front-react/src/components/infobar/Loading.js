import React from 'react';
import { connect } from 'react-redux';
import './Loading.css';

let Loading = ({loading}) => {
	let style = {visibility: loading ? 'visible' : 'hidden'};
	return (
		<div className="Loading" style={style}>
			Cargando...
		</div>
	);
};

Loading = connect((state) => ({loading: state.map.loading}))(Loading);

export default Loading;