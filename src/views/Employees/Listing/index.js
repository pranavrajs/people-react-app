import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './listing.css';
import EmployeeList from './components/EmployeeList';
import EmployeeTableHeader from './components/EmployeeTableHeader';
import PageHeader from './components/PageHeader';

const EmployeeListing = (props) => {
  const { history, employees } = props;

  return (
    <Fragment>
      <PageHeader
        employeeCount={employees.length}
        onClick={() => history.push('/employees/new')}
      />
      { employees.length ? <EmployeeTableHeader /> : null }
      <EmployeeList employees={employees} onClick={(id) => history.push(`/employees/${id}/update`)} />
    </Fragment>
  );
};

EmployeeListing.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.shape({})),
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

EmployeeListing.defaultProps = {
  employees: [],
};

export default EmployeeListing;
