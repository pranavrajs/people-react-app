import React from 'react';
import { withLabelAndHelper } from './withLabelAndHelper';
import classnames from 'classnames';
import Select from 'react-select'

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
  valueContainer: (provided) => {
    return { ...provided, color: 'var(--color-text-light)', padding: 0, fontSize: 'var(--font-md)' }
  },
  placeholder: (provided) => ({
    ...provided,
    color: 'var(--color-text-light)',
    margin: 0,
  })
}

const FormSelect = ({ className, type, ...props }) => {
  const inputClassName = classnames(className, 'form--select')

  return <Select {...props} styles={customSelectStyles} className={inputClassName} />
};

const FormSelectWithLabelAndHelperText = withLabelAndHelper(FormSelect);
export default FormSelectWithLabelAndHelperText;
