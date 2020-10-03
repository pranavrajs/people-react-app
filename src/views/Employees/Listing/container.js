import { connect } from 'react-redux';
import { getEmployeeRecords } from 'store/features/employees/selectors';
import EmployeeListing from '.';

const mapStateToProps = (state) => ({
  employees: getEmployeeRecords(state),
});

const EmployeeListingContainer = connect(mapStateToProps)(EmployeeListing);
export default EmployeeListingContainer;
