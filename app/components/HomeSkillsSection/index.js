import React from 'react';
import Title from '../Title/index';
import RedirectButton from '../RedirectButton/index';
import baseStyle from '../../common/Style/baseStyle.css';
import SwipeWrapper from '../../containers/SwipeWrapper/index';

import LinearProgressWrapper from '../../containers/LinearProgressWrapper/index';

const skillsSection = (() =>
  <div id="skillsSection" className={[baseStyle.content, baseStyle.marginCenter].join(' ')}>
    <div className={baseStyle.column}>
      <Title
        caption="Know Something About"
        title="My Skills"
      />
      <SwipeWrapper minWidth={600} navigation>
        <div className={[baseStyle.flex].join(' ')}>
          <LinearProgressWrapper
            skillName="React"
            value={80}
          />
          <LinearProgressWrapper
            skillName="React"
            value={80}
          />
          <LinearProgressWrapper
            skillName="React"
            value={80}
          />
          <LinearProgressWrapper
            skillName="React"
            value={80}
          />
          <LinearProgressWrapper
            skillName="React"
            value={80}
          />
        </div>
        <div className={[baseStyle.flex].join(' ')}>
          <LinearProgressWrapper
            skillName="React"
            value={80}
          />
          <LinearProgressWrapper
            skillName="React"
            value={80}
          />
          <LinearProgressWrapper
            skillName="React"
            value={80}
          />
          <LinearProgressWrapper
            skillName="React"
            value={80}
          />
          <LinearProgressWrapper
            skillName="React"
            value={80}
          />
        </div>
      </SwipeWrapper>
      <RedirectButton
        label="Know More"
        path="/resume"
      />
    </div>
  </div>
);

export default skillsSection;
