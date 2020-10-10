/* eslint-disable */
import React from 'react';

const ReactSelect = ({
  options, value, onChange, ...props
}) => {
  function handleChange(event) {
    const option = options.find(
      (option) => option.value === event.currentTarget.value,
    );
    onChange(option);
  }
  return (
    <select data-testid="select" value={value} onChange={handleChange} {...props}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

module.exports = ReactSelect;
