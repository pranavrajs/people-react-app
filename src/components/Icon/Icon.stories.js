import React from 'react';

import Icon from '.';

export default {
  title: 'Remote/Icon',
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const DefaultIcon = Template.bind({});
DefaultIcon.args = { name: 'user', color: '#000' };
