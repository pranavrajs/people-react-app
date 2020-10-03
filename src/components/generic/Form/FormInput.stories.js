import React from 'react';

import FormInput from './FormInput';

export default {
  title: 'Remote/FormInput',
  component: FormInput,
};

const Template = (args) => <FormInput {...args} />;

export const DefaultFormInput = Template.bind({});
DefaultFormInput.args = {
  label: 'Name',
  placeholder: 'eg: Jane Doe',
  helperText: 'First and last names',
};
