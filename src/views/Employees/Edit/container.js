import { connect } from 'react-redux';
import employeeSlice from 'store/features/employees';
import { getEmployeeRecord } from 'store/features/employees/selectors';
import EditEmployeeComponent from '.';

const { actions } = employeeSlice;

const bindActions = (dispatch) => ({
  updateEmployee: (...args) => dispatch(actions.update(...args)),
});

const mapStateToProps = (state, ownProps) => {
  const { match: { params: { employeeId } } } = ownProps;
  return {
    employee: getEmployeeRecord(state, Number(employeeId)),
  };
};

const EditEmployeeContainer = connect(mapStateToProps, bindActions)(EditEmployeeComponent);
export default EditEmployeeContainer;
