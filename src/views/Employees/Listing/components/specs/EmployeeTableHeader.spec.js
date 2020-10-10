import React from 'react';
import i18n from 'i18n/en';
import EmployeeTableHeader from '../EmployeeTableHeader';
import { render, screen } from '@testing-library/react';

const { HEADER } = i18n.EMPLOYEE.LIST.TABLE;

describe('EmployeeTableHeader', () => {
  it('render table headers', () => {
    render(<EmployeeTableHeader />);
    const jobTitle = HEADER.JOB_TITLE;
    expect(screen.queryByText(jobTitle)).toBeInTheDocument();
  });
})
