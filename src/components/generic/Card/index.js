import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const Card = ({ children, className }) => (
  <div className={`card ${className}`}>
    {children}
  </div>
);

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  className: '',
};

export default Card;
