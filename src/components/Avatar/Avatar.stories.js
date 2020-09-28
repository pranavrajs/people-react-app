import React from 'react';

import Avatar from '.';

export default {
  title: 'Remote/Avatar',
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const DefaultAvatar = Template.bind({});
DefaultAvatar.args = {
  name: 'Julie Howard',
};
