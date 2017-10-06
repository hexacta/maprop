import { connect } from 'react-redux';
import PropertyType from './../components/sidebar/PropertyType.js';
import { changePropertyType } from './../actions';

const mapStateToProps = (state) => ({
	propertyType: state.filters.propertyType,
	propertyTypes: state.filters.propertyTypes
});

const mapDispatchToProps = (dispatch) => ({
	onPropertyTypeClick: (type) => dispatch(changePropertyType(type))
});

const SidebarPropertyType = connect(mapStateToProps,mapDispatchToProps)(PropertyType);

export default SidebarPropertyType;