import React from 'react';
import { render, screen } from '@testing-library/react';
import EmployeeListing from '..';
import userEvent from '@testing-library/user-event'

jest.mock('../components/EmployeeTableHeader', () => () => <div data-testid="EmployeeTableHeader" />)

describe('EmployeeListing', () => {
  it('doesnot render EmployeeTableHeader if employee count is empty', () => {
    render(<EmployeeListing employees={[]} history={{}} />);
    expect(screen.queryByTestId('EmployeeTableHeader')).not.toBeInTheDocument();
  });

  it('renders EmployeeTableHeader if employee count is not 0', () => {
    render(
      <EmployeeListing
        employees={[
          { id: 1, name: 'employee-1', country: { label: '' }, salary: 0 },
          { id: 2, name: 'employee-2', country: { label: '' }, salary: 0 }
        ]}
        history={{}}
      />
    );
    expect(screen.queryAllByTestId('EmployeeTableHeader').length).toEqual(1);
  });

  it('calls edit function with correct arguments', () => {
    const mockClickFn = jest.fn();
    render(
      <EmployeeListing
        employees={[{ id: 1, name: 'employee-1', country: { label: 'India' }, salary: 5000 }]}
        history={{ push: mockClickFn }}
      />
    );
    userEvent.click(screen.getByText('Edit'));
    expect(mockClickFn.mock.calls.length).toEqual(1);
    expect(mockClickFn.mock.calls[0][0]).toEqual('/employees/1/update');
  })
})
