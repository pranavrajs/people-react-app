import React, { Fragment } from 'react';

import Button from '.';
import Icon from '../Icon';

export default {
  title: 'Remote/Button',
  component: Button,
};

const Template = ({ children, ...restArgs }) => (
  <Button {...restArgs}>
    {children}
  </Button>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Submit',
  onClick: () => console.log('Clicked submit'),
};

export const PrimaryWithShadow = Template.bind({});
PrimaryWithShadow.args = {
  variant: 'primary',
  children: <>
    <Icon name="user" size="18" />
    <span>Add employee</span>
            </>,
  shadow: true,
  onClick: () => console.log('Clicked add employee'),
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  variant: 'primary-light',
  children: 'Cancel',
  onClick: () => console.log('Clicked Cancel'),
};

export const PrimaryLightCompact = Template.bind({});
PrimaryLightCompact.args = {
  variant: 'primary-light',
  children: 'Cancel',
  compact: true,
  onClick: () => console.log('Clicked Cancel'),
};
