import React, { Fragment } from 'react';
import './listing.css'
import i18n from '../../../i18n/en'
import Button from '../../../components/Button';
import Icon from '../../../components/generic/Icon';
import EmployeeList from './EmployeeList';
import EmployeeTableHeader from './EmployeeTableHeader';

const { LIST } = i18n.EMPLOYEE;

const PageHeader = ({ employeeCount, onClick }) => {
  let employeeCountIndication = '';
  if (employeeCount > 1) {
    employeeCountIndication = `${employeeCount} ${LIST.RECORD_PLURAL}`
  } else if (employeeCount === 1) {
    employeeCountIndication = `${employeeCount} ${LIST.RECORD_SINGULAR}`
  }

  return (
    <div className="employee-list--header">
      <div className="employee-list--title-group">
        <div className="employee-list--title">{LIST.TITLE}</div>
        <div className="employee-list--record-indicator">{employeeCountIndication}</div>
      </div>
      <Button shadow onClick={onClick}>
        <Icon name="user" size={18} />
        <span>{LIST.ADD_EMPLOYEE_BUTTON_TEXT}</span>
      </Button>
    </div>
  )
}

const EmployeeListing = (props) => {
  const employees = [
    {
      id: 1,
      fullName: 'Ann Henry',
      dob: '04/12/1990',
      jobTitle: 'Product manager',
      country: 'United States',
      salary: 60000
    },
    {
      id: 2,
      fullName: 'Ann Henry',
      dob: '04/12/1990',
      jobTitle: 'Product manager',
      country: 'United States',
      salary: 60000
    },
    {
      id: 3,
      fullName: 'Ann Henry',
      dob: '04/12/1990',
      jobTitle: 'Product manager',
      country: 'United States',
      salary: 60000
    },
    {
      id: 4,
      fullName: 'Ann Henry',
      dob: '04/12/1990',
      jobTitle: 'Product manager',
      country: 'United States',
      salary: 60000
    }
  ]

  const { history } = props

  return (
    <Fragment>
      <PageHeader
        employeeCount={employees.length}
        onClick={() => history.push('/employees/new')}
      />
      <EmployeeTableHeader />
      <EmployeeList employees={employees} />
    </Fragment>
  )
}

export default EmployeeListing
