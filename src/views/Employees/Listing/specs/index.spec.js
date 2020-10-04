import React from 'react';
import { shallow, mount } from 'enzyme';
import i18n from 'i18n/en';
import EmployeeListing from '..';
import EmployeeTableHeader from '../components/EmployeeTableHeader';

describe('EmployeeListing', () => {
  it('doesnot render EmployeeTableHeader if employee count is empty', () => {
    const wrapper = shallow(<EmployeeListing employees={[]} history={{}} />);
    expect(wrapper.containsMatchingElement(<EmployeeTableHeader />)).toEqual(false);
  });

  it('renders EmployeeTableHeader if employee count is not 0', () => {
    const wrapper = shallow(<EmployeeListing employees={[{ id: 1, name: 'employee-1' }]} history={{}} />);
    expect(wrapper.containsMatchingElement(<EmployeeTableHeader />)).toEqual(true);
  });

  it('calls edit function with correct arguments', () => {
    const mockClickFn = jest.fn()
    const component = mount(
      <EmployeeListing
        employees={[{ id: 1, name: 'employee-1', country: { label: 'India' }, salary: 5000 }]}
        history={{ push: mockClickFn }}
      />
    );
    component.find('button').last().simulate('click');
    expect(mockClickFn.mock.calls.length).toEqual(1);
    expect(mockClickFn.mock.calls[0][0]).toEqual('/employees/1/update');
  })
})
