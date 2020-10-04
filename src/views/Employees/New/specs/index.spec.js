import React from 'react';
import { shallow, mount } from 'enzyme';
import EmployeeForm from 'components/business/EmployeeForm';
import NewEmployeeComponent from '..';
import { wait } from '@testing-library/react';

describe('NewEmployeeComponent', () => {

  it('render EmployeeForm', () => {
    const component = shallow(<NewEmployeeComponent addEmployee={jest.fn()} history={{ replace: jest.fn() }} />);
    expect(component.containsMatchingElement(EmployeeForm)).toEqual(true);
  });

  it('responds to submit button correctly', async () => {
    const addEmployeeMock = jest.fn();
    const replaceMock = jest.fn();

    const component = mount(
      <NewEmployeeComponent
        addEmployee={addEmployeeMock}
        history={{ replace: replaceMock }}
      />
    );
    await wait(() => {
      component.find('.button').last().simulate('submit')
    })
    expect(addEmployeeMock.mock.calls.length).toEqual(0);
    expect(replaceMock.mock.calls.length).toEqual(0);
  });

  it('responds to cancel button correctly', () => {
    const addEmployeeMock = jest.fn();
    const replaceMock = jest.fn();

    const component = mount(
      <NewEmployeeComponent
        addEmployee={addEmployeeMock}
        history={{ replace: replaceMock }}
      />
    );
    component.find('.button').first().simulate('click')
    expect(addEmployeeMock.mock.calls.length).toEqual(0);
    expect(replaceMock.mock.calls[0][0]).toEqual('/employees');
  });
})
