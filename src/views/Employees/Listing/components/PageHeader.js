import React from 'react';
import PropTypes from 'prop-types';

import i18n from 'i18n/en';
import Button from 'components/generic/Button';
import Icon from 'components/generic/Icon';

const { LIST } = i18n.EMPLOYEE;
const PageHeader = ({ employeeCount, onClick }) => {
  let employeeCountIndication = '';
  if (employeeCount > 1) {
    employeeCountIndication = `${employeeCount} ${LIST.RECORD_PLURAL}`;
  } else if (employeeCount === 1) {
    employeeCountIndication = `${employeeCount} ${LIST.RECORD_SINGULAR}`;
  }

  return (
    <div className="employee-list--header">
      <div className="employee-list--title-group">
        <div className="employee-list--title">{LIST.TITLE}</div>
        <div className="employee-list--record-indicator">{employeeCountIndication}</div>
      </div>
      <Button shadow onClick={onClick}>
        <Icon name="user" size={18} />
        <span>{LIST.ADD_EMPLOYEE_BUTTON_TEXT}</span>
      </Button>
    </div>
  );
};

PageHeader.propTypes = {
  employeeCount: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

PageHeader.defaultProps = {
  employeeCount: 0,
};

export default React.memo(PageHeader);
