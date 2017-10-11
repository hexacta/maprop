import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Surface.css';

class Surface extends Component {
	static propTypes = {
		min: PropTypes.number,
		max: PropTypes.number,
		onSurfaceChange: PropTypes.func.isRequired,
		onSurfaceSet: PropTypes.func.isRequired
	};
	constructor(props){
		super(props);
		this.onChangeMin = this.onChangeMin.bind(this);
		this.onChangeMax = this.onChangeMax.bind(this);
	}
	onChangeMin(event){
		let min = parseInt(event.target.value);
		let max = this.props.max;
		if(min > max){
			max = min;
		}
		this.props.onSurfaceChange(min, max);
	}
	onChangeMax(event){
		let min = this.props.min;
		let max = parseInt(event.target.value);
		if(max < min){
			min = max;
		}
		this.props.onSurfaceChange(min, max);
	}
	render() {
		return (
			<form className="Surface">
				<h2>Superficie</h2>
				<div>
					<div>{this.props.min} m&sup2; - {this.props.max} m&sup2;</div>
					<input type="range" min="0" max="500" step="1" value={this.props.min} onChange={this.onChangeMin} onMouseUp={this.props.onSurfaceSet}/>
					<input type="range" min="0" max="500" step="1" value={this.props.max} onChange={this.onChangeMax} onMouseUp={this.props.onSurfaceSet}/>
				</div>
			</form>
		);
	}
}

export default Surface;
