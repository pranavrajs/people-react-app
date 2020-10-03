import React from 'react';
import PropTypes from 'prop-types';

const CardContent = ({ children, className }) => (
  <div className={`card--content ${className}`}>
    {children}
  </div>
);

CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

CardContent.defaultProps = {
  className: '',
};

export default CardContent;
