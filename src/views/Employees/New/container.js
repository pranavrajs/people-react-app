import { connect } from 'react-redux';
import employeeSlice from 'store/features/employees';
import NewEmployeeComponent from '.';

const { actions } = employeeSlice;

const bindActions = (dispatch) => ({
  addEmployee: (...args) => dispatch(actions.add(...args)),
});

const NewEmployeeContainer = connect(null, bindActions)(NewEmployeeComponent);
export default NewEmployeeContainer;
