import React from 'react';
import SwipeWrapper from '../../containers/SwipeWrapper/index';
import Title from '../Title/index';
import RedirectButton from '../RedirectButton/index';
import baseStyle from '../../common/Style/baseStyle.css';


const AboutSection = (() =>
  <div className={[baseStyle.content, baseStyle.column, baseStyle.marginCenter].join(' ')}>
    <Title
      caption="Know Something"
      title="Who am I"
    />
    <SwipeWrapper minWidth={window.innerWidth} tabs>
      <div label="About Me"> About Me </div>
      <div label="My Vision"> My Vision </div>
      <div label="My Goal"> My Goal </div>
    </SwipeWrapper>
    <RedirectButton
      label="Know More"
      path="/about"
    />
  </div>
);

export default AboutSection;
