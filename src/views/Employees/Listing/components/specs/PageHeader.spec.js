import React from 'react';
import PageHeader from '../PageHeader';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe('PageHeader', () => {
  it('render correct count if plural', () => {
    render(<PageHeader employeeCount={2} onClick={() => { }} />);
    expect(screen.queryByText('2 employees')).toBeInTheDocument();
  })
  it('render correct count if singular', () => {
    render(<PageHeader employeeCount={1} onClick={() => { }} />);
    expect(screen.queryByText('1 employee')).toBeInTheDocument();
  })

  it('render correct count if no employees are present', () => {
    render(<PageHeader employeeCount={0} onClick={() => { }} />);
    expect(screen.queryByText('employee')).not.toBeInTheDocument();
  });

  it('respond to click on add employee button', () => {
    const mockClickFn = jest.fn();
    render(<PageHeader employeeCount={2} onClick={mockClickFn} />);
    userEvent.click(screen.getByText('Add Employee'));
    expect(mockClickFn.mock.calls.length).toEqual(1);
  });
})
