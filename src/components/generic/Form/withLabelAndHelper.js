import React from 'react';
import classnames from 'classnames';
import './form.css'

export const withLabelAndHelper = (Component) =>
  ({ label, helperText, name, error, ...props }) => {
    const groupClassName = classnames('form-group', { 'error': !!error })
    const labelClassName = classnames('form--label', { 'error': !!error })
    const componentClassName = classnames({ 'error': !!error })
    const helperClassName = classnames('form--helper-text', { 'error': !!error })
    return (
      <div className={groupClassName}>
        <label className={labelClassName} for={name}>
          <div class="form--label-content">{label}</div>
          <Component {...props} className={componentClassName} name={name}></Component>
        </label>
        <div className={helperClassName}>{error ? error : helperText}</div>
      </div>
    )
  }
