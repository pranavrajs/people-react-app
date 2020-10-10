import React from 'react';
import { render, screen } from '@testing-library/react';
import NewEmployeeComponent from '..';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'


describe('NewEmployeeComponent', () => {
  it('render EmployeeForm', () => {
    render(<NewEmployeeComponent addEmployee={jest.fn()} history={{ replace: jest.fn() }} />);
    expect(screen.queryByText('Name')).toBeInTheDocument();
  });

  it('doesnot submit the form if values are incorrect', async () => {
    const addEmployeeMock = jest.fn()
    const replaceMock = jest.fn()
    render(
      <NewEmployeeComponent addEmployee={addEmployeeMock} history={{ replace: replaceMock }} />
    );
    userEvent.click(screen.getByText('Add Employee'))

    await waitFor(() => {
      expect(screen.getAllByText('Required').length).toEqual(5);
      expect(addEmployeeMock.mock.calls.length).toEqual(0);
      expect(replaceMock.mock.calls.length).toEqual(0);
    })
  });

  it('submits the form if values are correct', async () => {
    const addEmployeeMock = jest.fn()
    const replaceMock = jest.fn()
    render(
      <NewEmployeeComponent addEmployee={addEmployeeMock} history={{ replace: replaceMock }} />
    );

    userEvent.type(screen.getByTestId('fullName'), 'Jane Doe');
    userEvent.type(screen.getByTestId('birthDate'), '11/10/1992');
    userEvent.type(screen.getByTestId('salary'), '600');
    userEvent.type(screen.getByTestId('jobTitle'), 'Product Manager');
    userEvent.selectOptions(screen.getByTestId('country'), 'India');
    userEvent.click(screen.getByText('Add Employee'))

    await waitFor(() => {
      expect(screen.queryAllByText('Required').length).toEqual(0);
      expect(replaceMock.mock.calls[0][0]).toEqual('/employees');
      expect(replaceMock.mock.calls.length).toEqual(1);
      expect(addEmployeeMock).toHaveBeenCalledWith({
        fullName: 'Jane Doe',
        birthDate: '11/10/1992',
        salary: 600,
        jobTitle: 'Product Manager',
        country: {
          label: 'India',
          value: 'India'
        }
      });
    })
  });

  it('responds to cancel button correctly', async () => {
    const addEmployeeMock = jest.fn();
    const replaceMock = jest.fn();

    render(
      <NewEmployeeComponent addEmployee={addEmployeeMock} history={{ replace: replaceMock }} />
    );
    userEvent.click(screen.getByText('Cancel'));

    await waitFor(() => {
      expect(addEmployeeMock.mock.calls.length).toEqual(0);
      expect(replaceMock.mock.calls[0][0]).toEqual('/employees');
    })
  });
})
