import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import classnames from 'classnames'
const Button = ({ className = '', variant, compact, shadow, children, ...props }) => {
  const buttonClassName = classnames({
    'button': true,
    [`button--${variant}`]: true,
    'button--compact': compact,
    'button--withshadow': shadow,
  }, className);
  return (
    <button
      type="button"
      className={buttonClassName}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  compact:PropTypes.bool,
  onClick: PropTypes.func,
  shadow: PropTypes.bool,
  variant: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  compact: false,
  onClick: () => {},
  shadow: false,
  variant: 'primary',
};

export default Button;
