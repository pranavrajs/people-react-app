import React from 'react';
import { formatSalary } from '../../../utils';
import Button from '../../generic/Button';
import Card from '../../generic/Card';
import i18n from '../../../i18n/en';

const { LIST } = i18n.EMPLOYEE;

const EmployeeCard = (employee) => (
  <Card className="employee-list--card" key={employee.id}>
    <div className="flex-1 employee-row--cell">
      <div className="employee-card--name">{employee.fullName}</div>
      <div className="employee-card--dob">{employee.dob}</div>
    </div>
    <div className="flex-1 employee-row--cell">{employee.jobTitle}</div>
    <div className="flex-1 employee-row--cell">{employee.country}</div>
    <div className="flex-1 employee-row--cell">{formatSalary(employee.salary)}</div>
    <div className="flex-1 employee-card--actions">
      <Button variant="primary-light">
        {LIST.TABLE.EDIT_BUTTON_TEXT}
      </Button>
    </div>
  </Card>
);

export default EmployeeCard;
