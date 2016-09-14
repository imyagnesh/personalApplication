import React, { PropTypes } from 'react';
import RedirectButton from '../RedirectButton/index';
import baseStyle from '../../common/Style/baseStyle.css';
import styles from './styles.css';

const contactSection = (({ content, buttonLabel }) =>
  <div className={styles.wrapper}>
    <h1 className={baseStyle.display1}>{content}</h1>
    <RedirectButton
      label={buttonLabel}
      path="/contact"
    />
  </div>
);

contactSection.propTypes = {
  content: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};

export default contactSection;
