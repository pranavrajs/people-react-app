import React from 'react';
import { shallow, mount } from 'enzyme';
import EmployeeForm from 'components/business/EmployeeForm';
import EditEmployee from '..';
import { Redirect } from 'react-router-dom';
import { wait } from '@testing-library/react';

describe('EditEmployee', () => {
  it('render Redirect if employee.id is empty', () => {
    const component = shallow(<EditEmployee employee={{}} updateEmployee={jest.fn()} history={{ replace: jest.fn() }} />);
    expect(component.containsMatchingElement(<Redirect to="/employees" />)).toEqual(true);
  });

  it('render EmployeeForm', () => {
    const component = shallow(<EditEmployee employee={{ id: 2 }} updateEmployee={jest.fn()} history={{ replace: jest.fn() }} />);
    expect(component.containsMatchingElement(EmployeeForm)).toEqual(true);
  });

  it('responds to submit button correctly', async () => {
    const updateEmployeeMock = jest.fn();
    const replaceMock = jest.fn();

    const component = mount(
      <EditEmployee
        employee={{ id: 2 }}
        updateEmployee={updateEmployeeMock}
        history={{ replace: replaceMock }}
      />
    );
    await wait(() => {
      component.find('.button').last().simulate('submit')
    })
    expect(updateEmployeeMock.mock.calls.length).toEqual(0);
    expect(replaceMock.mock.calls.length).toEqual(0);
  });

  it('responds to cancel button correctly', () => {
    const updateEmployeeMock = jest.fn();
    const replaceMock = jest.fn();

    const component = mount(
      <EditEmployee
        employee={{ id: 2 }}
        updateEmployee={updateEmployeeMock}
        history={{ replace: replaceMock }}
      />
    );
    component.find('.button').first().simulate('click')
    expect(updateEmployeeMock.mock.calls.length).toEqual(0);
    expect(replaceMock.mock.calls[0][0]).toEqual('/employees');
  });
})
