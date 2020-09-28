import React from 'react';

import FormFooter from './FormFooter';

export default {
  title: 'Remote/FormFooter',
  component: FormFooter,
};

const Template = (args) => <FormFooter {...args} />;

export const DefaultFormFooter = Template.bind({});
DefaultFormFooter.args = {
  cancelButton: {
    label: 'Cancel',
    onClick: () => console.log('Cancel clicked'),
  },
  submitButton: {
    label: 'Submit',
    onClick: () => console.log('Submit clicked'),
  }
};
