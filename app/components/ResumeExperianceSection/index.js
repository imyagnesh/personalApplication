import React from 'react';
import Title from '../Title/index';
import baseStyle from '../../common/Style/baseStyle.css';
// import Paper from 'material-ui/Paper';
import SwipeWrapper from '../../containers/SwipeWrapper/index';
import ProjectCard from '../ProjectCard/index';

const PortfolioSection = (() =>
  <div className={baseStyle.wrapper}>
    <Title
      caption="Here are Some of"
      title="My Projects"
    />
    <SwipeWrapper minWidth={300} navigation>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </SwipeWrapper>
    
  </div>
);

export default PortfolioSection;
