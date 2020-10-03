import React from 'react';
import PropTypes from 'prop-types';
import User from './assets/user';

const ICONS = {
  user: User,
};

const Icon = ({ name, ...props }) => {
  const Element = ICONS[name] || 'div';
  return (
    <Element {...props} />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
