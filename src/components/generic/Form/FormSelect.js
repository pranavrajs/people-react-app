import React from 'react';
import classnames from 'classnames';
import Select from 'react-select';
import PropTypes from 'prop-types';

import withLabelAndHelper from './withLabelAndHelper';

const customSelectStyles = {
  control: (provided, state) => ({
    alignItems: 'center',
    background: 'transparent',
    border: 0,
    borderColor: 'transparent',
    borderBottom: state.isFocused ? '1px solid var(--color-primary)' : '1px solid var(--color-text-light)',
    borderRadius: 0,
    display: 'flex',
    flexWrap: 'wrap',
    fontFamily: 'var(--font-family)',
    fontSize: 'var(--font-md)',
    justifyContent: 'space-between',
    marginBottom: 'var(--s-1)',
    outline: 0,
    padding: '0',
    position: 'relative',
  }),
  valueContainer: (provided) => ({
    ...provided, color: 'var(--color-heading)', padding: 0, fontSize: 'var(--font-md)',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'var(--color-text)',
    margin: 0,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'var(--color-heading)',
    marginLeft: 0,
    marginRight: 0,
  }),
};

const FormSelect = ({ className, ...props }) => {
  const inputClassName = classnames(className, 'form--select');

  return <Select {...props} styles={customSelectStyles} className={inputClassName} />;
};

FormSelect.propTypes = {
  className: PropTypes.string,
};

FormSelect.defaultProps = {
  className: '',
};

const FormSelectWithLabelAndHelperText = withLabelAndHelper(FormSelect);
export default FormSelectWithLabelAndHelperText;
