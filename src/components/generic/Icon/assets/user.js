import React from 'react';
import PropTypes from 'prop-types';

const User = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height="24"
    viewBox={`0 0 24 24`}
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

User.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

User.defaultProps = {
  size: 24,
  color: '#fff',
}

export default User;
