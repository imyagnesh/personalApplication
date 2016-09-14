import React from 'react';
import Title from '../Title/index';
import RedirectButton from '../RedirectButton/index';
import baseStyle from '../../common/Style/baseStyle.css';

const skillsSection = (() =>
  <div className={[baseStyle.content, baseStyle.column, baseStyle.marginCenter].join(' ')}>
    <Title
      caption="Know Something About"
      title="My Skills"
    />
    <RedirectButton
      label="Know More"
      path="/resume"
    />
  </div>
);

export default skillsSection;
