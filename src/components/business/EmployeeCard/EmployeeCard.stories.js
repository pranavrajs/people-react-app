import React from 'react';

import EmployeeCard from '.';

export default {
  title: 'Remote/EmployeeCard',
  component: EmployeeCard,
};

const Template = (args) => <EmployeeCard {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  id: 1,
  fullName: 'John Doe',
  birthDate: '12/12/2001',
  jobTitle: 'Senior Developer',
  country: {
    label: 'India'
  },
  salary: 50000
};
