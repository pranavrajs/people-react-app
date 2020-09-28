import React from 'react';
import PropTypes from 'prop-types';

const CardHeader = ({ title, subtitle, className }) => (
  <div className={`card--header ${className}`}>
    <div className="card--title">
      {title}
    </div>
    <div className="card--subtitle">
      {subtitle}
    </div>
  </div>
);

CardHeader.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

CardHeader.defaultProps = {};

export default CardHeader;
