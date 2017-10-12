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
		this.onChange = this.onChange.bind(this);
	}
	onChange(event){
		this.props.onPropertyTypeClick(event.target.value);
	}
	render() {
		return (
		    <form className="PropertyType">
		    	<h3>Tipo de propiedad</h3>
		    	<select name="propertyType" value={this.props.propertyType} onChange={this.onChange}>
		    		{this.props.propertyTypes.map(propertyType => <option value={propertyType}>{propertyType}</option>)}
		    	</select>
			</form>
		);
	}
}

export default PropertyType;
