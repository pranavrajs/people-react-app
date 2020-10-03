import React from 'react';
import classnames from 'classnames';
import './form.css';

const withLabelAndHelper = (Component) => ({
  label, helperText, name, error, touched, ...props
}) => {
  const hasError = !!error && touched;
  const groupClassName = classnames('form-group', { error: hasError });
  const labelClassName = classnames('form--label', { error: hasError });
  const componentClassName = classnames({ error: hasError });
  const helperClassName = classnames('form--helper-text', { error: hasError });
  return (
    <div className={groupClassName}>
      <label className={labelClassName} htmlFor={name}>
        <div className="form--label-content">{label}</div>
        <Component {...props} className={componentClassName} name={name} />
      </label>
      <div className={helperClassName}>{touched ? error || helperText : helperText}</div>
    </div>
  );
};

export default withLabelAndHelper;
