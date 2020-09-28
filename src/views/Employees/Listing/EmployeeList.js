import React from 'react';
import { EmployeeCard } from '../../../components/business/EmployeeCard';

const EmployeeList = ({ employees }) => employees.map(employee => (
  <EmployeeCard {...employee} key={employee.id} />
))

export default EmployeeList
