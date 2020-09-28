import React from 'react';
import PropTypes from 'prop-types';

const CardFooter = ({ children, className = '' }) => (
  <div className={`card--footer ${className}`}>
    {children}
  </div>
);

CardFooter.propTypes = {
  children: PropTypes.string.isRequired,
};

CardFooter.defaultProps = {};

export default CardFooter;
