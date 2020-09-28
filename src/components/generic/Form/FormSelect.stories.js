import React from 'react';

import FormSelect from './FormSelect';

export default {
  title: 'Remote/FormSelect',
  component: FormSelect,
};

const Template = (args) => <FormSelect {...args} />;

export const DefaultFormSelect = Template.bind({});
DefaultFormSelect.args = {
  label: 'Country',
  placeholder: 'eg: India',
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ],
  helperText: 'Select an item'
};
