import React from 'react';
import PropTypes from 'prop-types';
import './avatar.css';

const Avatar = ({ name = '' }) => {
  const [firstLetter] = name
  return (
    <div className="avatar">
      {firstLetter.toUpperCase()}
    </div>
  )
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Avatar;
