import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

import baseStyle from '../../common/Style/baseStyle.css';

const redirectButton = ({ label, path }) => {
  const changePath = (value) => {
    browserHistory.push(value);
  };
  return (
    <div className={[baseStyle.row, baseStyle.alignCenterCenter].join(' ')}>
      <RaisedButton label={label} secondary onTouchTap={() => { changePath(path); }} />
    </div>
  );
};

redirectButton.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default redirectButton;
