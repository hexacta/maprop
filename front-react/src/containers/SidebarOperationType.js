import { connect } from 'react-redux';
import OperationType from './../components/sidebar/OperationType.js';
import { changeOperationType } from './../actions';

const mapStateToProps = (state) => ({operationType: state.filters.operationType});

const mapDispatchToProps = (dispatch) => ({
	onOperationTypeClick: (type) => dispatch(changeOperationType(type))
});

const SidebarOperationType = connect(mapStateToProps,mapDispatchToProps)(OperationType);

export default SidebarOperationType;