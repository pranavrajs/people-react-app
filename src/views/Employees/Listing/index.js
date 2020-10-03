import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './listing.css';
import EmployeeList from './EmployeeList';
import EmployeeTableHeader from './EmployeeTableHeader';
import PageHeader from './PageHeader';

const EmployeeListing = (props) => {
  const { history, employees } = props;

  return (
    <Fragment>
      <PageHeader
        employeeCount={employees.length}
        onClick={() => history.push('/employees/new')}
      />
      { employees.length ? <EmployeeTableHeader /> : null }
      <EmployeeList employees={employees} />
    </Fragment>
  );
};

EmployeeListing.propTypes = {
  employees: PropTypes.arrayOf(),
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

EmployeeListing.defaultProps = {
  employees: [],
};

export default EmployeeListing;
