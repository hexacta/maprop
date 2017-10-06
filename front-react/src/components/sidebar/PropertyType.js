import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PropertyType.css';

class PropertyType extends Component {
	static propTypes = {
		propertyType: PropTypes.string.isRequired,
		propertyTypes: PropTypes.arrayOf(
			PropTypes.string
		).isRequired,
		onPropertyTypeClick: PropTypes.func.isRequired
	};
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}
	onClick(event){
		this.props.onPropertyTypeClick(event.target.value);
	}
	render() {
		return (
		    <form className="PropertyType">
		    	<h2>Tipo de propiedad</h2>
		    	{this.props.propertyTypes.map(propertyType => <div><input type="radio" name="propertyType" value={propertyType} defaultChecked={this.props.propertyType === propertyType} onClick={this.onClick}/> {propertyType}</div>)}
			</form>
		);
	}
}

export default PropertyType;
