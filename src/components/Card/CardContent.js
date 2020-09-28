import React from 'react';
import PropTypes from 'prop-types';

const CardContent = ({ children, className = '' }) => (
  <div className={`card--content ${className}`}>
    {children}
  </div>
);

CardContent.propTypes = {
  children: PropTypes.string.isRequired,
};

CardContent.defaultProps = {};

export default CardContent;
