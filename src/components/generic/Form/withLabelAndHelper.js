import React from 'react';

export const withLabelAndHelper = (Component) =>
  ({ label, helperText, name, ...props }) => (
    <div className="form-group">
      <label className="form--label" for={name}>
        <div>{label}</div>
        <Component {...props} name={name}></Component>
      </label>
      <div className="form--helper-text">{helperText}</div>
    </div>
  )
