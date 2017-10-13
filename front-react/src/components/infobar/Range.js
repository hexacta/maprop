import React from 'react';
import { connect } from 'react-redux';

import Colors from './../../constants/PolygonColors.js';
import Operations from './../../constants/Operations.js';
import { LOCALE } from './../../constants/Config';
import './Range.css';

const scaleFactor = 2;

let Range = ({min, max, operationType}) => {
	let style = {
		background: `linear-gradient(${Colors})`
	};
	let values = [];
	if(min && max){
		let step = ((max - min) / Colors.length) * scaleFactor;
		for(let i = 0; i < Colors.length / scaleFactor + 1; i ++){
			values.push(min + step * i);
		}
	}
	return (
		<div className="Range">
			<h3>Leyenda</h3>
			<div className="Gradient" style={style}>&nbsp;</div>
			<div className="Values">{values.map(v => <div>{Operations[operationType].unit}{Math.floor(v).toLocaleString(LOCALE)}</div>)}</div>
		</div>
	);
};

Range = connect((state) => ({
	min: state.map.range.min, 
	max: state.map.range.max,
	operationType: state.filters.operationType
}))(Range);

export default Range;