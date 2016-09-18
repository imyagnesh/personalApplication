import React from 'react';
import Title from '../Title/index';
import RedirectButton from '../RedirectButton/index';
import baseStyle from '../../common/Style/baseStyle.css';
// import Paper from 'material-ui/Paper';
// import SwipeWrapper from '../../containers/SwipeWrapper/index';
import FlipCard from '../FlipCard/index';

// const style = {
//   paper: {
//     height: 400,
//     margin: 10,
//     textAlign: 'center',
//     display: 'flex',
//     flex: 1,
//   },
// };


const PortfolioSection = (() =>
  <div className={[baseStyle.content, baseStyle.marginCenter].join(' ')}>
    <div className={baseStyle.column}>
      <Title
        caption="Here are Some of"
        title="My Projects"
      />
      <FlipCard axis="x" duration={800} />
      <RedirectButton
        label="Know More"
        path="/portfolio"
      />
    </div>
  </div>
);

export default PortfolioSection;
