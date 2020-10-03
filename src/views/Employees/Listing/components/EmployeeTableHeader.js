import React from 'react';
import i18n from 'i18n/en';

const { HEADER } = i18n.EMPLOYEE.LIST.TABLE;

const EmployeeTableHeader = () => (
  <div className="employee-table--header">
    <div className="employee-table--thead flex-1">{HEADER.EMPLOYEE}</div>
    <div className="employee-table--thead flex-1">{HEADER.JOB_TITLE}</div>
    <div className="employee-table--thead flex-1">{HEADER.COUNTRY}</div>
    <div className="employee-table--thead flex-1">{HEADER.SALARY}</div>
    <div className="flex-1" />
  </div>
);

export default EmployeeTableHeader;
