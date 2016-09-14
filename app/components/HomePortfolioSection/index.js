import React from 'react';
import Title from '../Title/index';
import RedirectButton from '../RedirectButton/index';
import baseStyle from '../../common/Style/baseStyle.css';


const PortfolioSection = (() =>
  <div className={[baseStyle.content, baseStyle.column, baseStyle.marginCenter].join(' ')}>
    <Title
      caption="Here are Some of"
      title="My Projects"
    />
    <RedirectButton
      label="Know More"
      path="/portfolio"
    />
  </div>
);

export default PortfolioSection;
