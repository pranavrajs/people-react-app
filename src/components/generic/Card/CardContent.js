import React from 'react';
import PropTypes from 'prop-types';

const CardContent = ({ children, className }) => (
  <div className={`card--content ${className}`}>
    {children}
  </div>
);

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardContent.defaultProps = {
  className: '',
};

export default CardContent;
