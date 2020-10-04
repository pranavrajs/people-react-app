import React from 'react';
import { shallow } from 'enzyme';
import EmployeeList from '../EmployeeList';
import i18n from 'i18n/en';
import EmployeeCard from 'components/business/EmployeeCard';

describe('EmployeeList', () => {
  it('render no records message if employee list is empty', () => {
    const wrapper = shallow(<EmployeeList employees={[]} />);
    const noRecordsMessage = i18n.EMPLOYEE.LIST.NO_RECORDS;
    expect(wrapper.contains(noRecordsMessage)).toEqual(true);
  });

  it('render employee card component if employee list is available', () => {
    const wrapper = shallow(<EmployeeList employees={[{ id: 1, name: 'employee-1' }]} />);
    const noRecordsMessage = i18n.EMPLOYEE.LIST.NO_RECORDS;
    expect(wrapper.contains(noRecordsMessage)).toEqual(false);

    const employeeCard = <EmployeeCard id={1} name="employee-1" />
    expect(wrapper.containsMatchingElement(employeeCard)).toEqual(true);
  })
})
