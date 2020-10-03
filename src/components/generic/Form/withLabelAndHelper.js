import React from 'react';
import classnames from 'classnames';
import './form.css';

const withLabelAndHelper = (Component) => ({
  label, helperText, name, error, ...props
}) => {
  const groupClassName = classnames('form-group', { error: !!error });
  const labelClassName = classnames('form--label', { error: !!error });
  const componentClassName = classnames({ error: !!error });
  const helperClassName = classnames('form--helper-text', { error: !!error });
  return (
    <div className={groupClassName}>
      <label className={labelClassName} htmlFor={name}>
        <div className="form--label-content">{label}</div>
        <Component {...props} className={componentClassName} name={name} />
      </label>
      <div className={helperClassName}>{error || helperText}</div>
    </div>
  );
};

export default withLabelAndHelper;
