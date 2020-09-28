import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const Card = ({ children, className = '' }) => (
  <div className={`card ${className}`}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.string.isRequired,
};

Card.defaultProps = {};

export default Card;
