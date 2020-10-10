import React from 'react';
import { render, screen } from '@testing-library/react';
import EmployeeList from '../EmployeeList';
import i18n from 'i18n/en';

jest.mock('components/business/EmployeeCard', () => () => <div data-testid="EmployeeCard" />);

describe('EmployeeList', () => {
  it('render no records message if employee list is empty', () => {
    render(<EmployeeList employees={[]} />);
    const noRecordsMessage = i18n.EMPLOYEE.LIST.NO_RECORDS;
    expect(screen.queryByText(noRecordsMessage)).toBeInTheDocument();
  });

  it('render employee card component if employee list is available', () => {
    render(
      <EmployeeList
        employees={[
          { id: 1, name: 'employee-1', country: { label: 'India' }, salary: 0 },
          { id: 2, name: 'employee-2', country: { label: 'USA' }, salary: 1 }
        ]}
      />
    );
    const noRecordsMessage = i18n.EMPLOYEE.LIST.NO_RECORDS;
    expect(screen.queryByText(noRecordsMessage)).not.toBeInTheDocument();
    expect(screen.queryAllByTestId('EmployeeCard').length).toEqual(2);
  })
})
