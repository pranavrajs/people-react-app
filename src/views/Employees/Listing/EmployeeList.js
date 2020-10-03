import React from 'react';
import EmployeeCard from '../../../components/business/EmployeeCard';

import i18n from '../../../i18n/en';

const EmployeeList = ({ employees }) => {
  if (!employees.length) {
    return (
      <div className="text-center employee-list--no-records">
        <div>{i18n.EMPLOYEE.LIST.NO_RECORDS}</div>
        <div>{i18n.EMPLOYEE.LIST.CLICK_ON_ADD_EMPLOYEE}</div>
      </div>
    );
  }

  return employees.map((employee) => (
    <EmployeeCard {...employee} key={employee.id} />
  ));
};

export default EmployeeList;
