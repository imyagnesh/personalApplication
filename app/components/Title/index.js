import React, { PropTypes } from 'react';
import baseStyle from '../../common/Style/baseStyle.css';
import Divider from 'material-ui/Divider';

const Title = (({ caption, title }) =>
  <div className={[baseStyle.column, baseStyle.alignCenterCenter].join(' ')}>
    <p className={[baseStyle.subHeader].join(' ')}>{caption}</p>
    <h1 className={[baseStyle.title, baseStyle.upperCase].join(' ')}>{title}</h1>
    <div className={baseStyle.alignSelfCenter} style={{ width: '60px' }}><Divider /></div>
  </div>
);

Title.propTypes = {
  caption: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Title;
