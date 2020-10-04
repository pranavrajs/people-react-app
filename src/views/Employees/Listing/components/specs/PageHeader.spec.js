import React from 'react';
import { shallow } from 'enzyme';
import i18n from 'i18n/en';
import PageHeader from '../PageHeader';

describe('PageHeader', () => {
  it('render correct count', () => {
    const pluralCountComponent = shallow(<PageHeader employeeCount={2} />);
    expect(pluralCountComponent.contains('2 employees')).toEqual(true);

    const singleCountRender = shallow(<PageHeader employeeCount={1} />);
    expect(singleCountRender.contains('1 employee')).toEqual(true);

    const noEmployeeRender = shallow(<PageHeader employeeCount={0} />);
    expect(noEmployeeRender.contains('employee')).toEqual(false);
  });

  it('respond to click on add employee button', () => {
    const mockClickFn = jest.fn();
    const component = shallow(<PageHeader employeeCount={2} onClick={mockClickFn} />);
    component.find('Button').simulate('click');
    expect(mockClickFn.mock.calls.length).toEqual(1);
  });
})
