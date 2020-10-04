import React from 'react';
import { shallow } from 'enzyme';
import i18n from 'i18n/en';
import EmployeeTableHeader from '../EmployeeTableHeader';

const { HEADER } = i18n.EMPLOYEE.LIST.TABLE;

describe('EmployeeTableHeader', () => {
  it('render table headers', () => {
    const wrapper = shallow(<EmployeeTableHeader />);
    const jobTitle = HEADER.JOB_TITLE;
    expect(wrapper.contains(jobTitle)).toEqual(true);
  });
})
