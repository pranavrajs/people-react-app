import React from 'react';
import { render, screen } from '@testing-library/react';
import EditEmployeeComponent from '..';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe('EditEmployeeComponent', () => {
  it('render EmployeeForm', () => {
    render(
      <EditEmployeeComponent
        updateEmployee={jest.fn()}
        employee={{ id: 1, fullName: 'Jane Doe' }}
        history={{ replace: jest.fn() }}
      />
    );
    expect(screen.queryByDisplayValue('Jane Doe')).toBeInTheDocument();
  });

  it('submits the form if values are correct', async () => {
    const updateEmployeeMock = jest.fn()
    const replaceMock = jest.fn()
    render(
      <EditEmployeeComponent
        employee={{
          id: 1,
          fullName: 'Jane Doe',
          birthDate: '11/10/1992',
          salary: 600,
          jobTitle: 'Product Manager',
          country: {
            label: 'India',
            value: 'India'
          }
        }}
        updateEmployee={updateEmployeeMock}
        history={{ replace: replaceMock }}
      />
    );

    userEvent.type(screen.getByTestId('fullName'), ' Jr');
    userEvent.click(screen.getByText('Save'))

    await waitFor(() => {
      expect(screen.queryAllByText('Required').length).toEqual(0);
      expect(updateEmployeeMock).toHaveBeenCalledWith({
        fullName: 'Jane Doe Jr',
        birthDate: '11/10/1992',
        id: 1,
        salary: 600,
        jobTitle: 'Product Manager',
        country: {
          label: 'India',
          value: 'India'
        }
      });
      expect(replaceMock.mock.calls[0][0]).toEqual('/employees');
      expect(replaceMock.mock.calls.length).toEqual(1);
    })
  });

  it('responds to cancel button correctly', async () => {
    const updateEmployeeMock = jest.fn();
    const replaceMock = jest.fn();

    render(
      <EditEmployeeComponent employee={{ id: 1 }} updateEmployee={updateEmployeeMock} history={{ replace: replaceMock }} />
    );
    userEvent.click(screen.getByText('Cancel'));

    await waitFor(() => {
      expect(updateEmployeeMock.mock.calls.length).toEqual(0);
      expect(replaceMock.mock.calls[0][0]).toEqual('/employees');
    })
  });
})
