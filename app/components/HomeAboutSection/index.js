import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import SwipeWrapper from '../../containers/SwipeWrapper/index';
import Title from '../Title/index';
import RedirectButton from '../RedirectButton/index';
import baseStyle from '../../common/Style/baseStyle.css';

const style = {
  avatar: {
    position: 'absolute',
    left: 'calc(50% - 50px)',
  },
  paper: {
    marginTop: '50px',
    height: 390,
  },
};

const AboutSection = (() =>
  <div className={[baseStyle.content, baseStyle.marginCenter].join(' ')}>
    <div className={baseStyle.column}>
      <Title
        caption="Know Something"
        title="Who am I"
      />
      <SwipeWrapper minWidth={window.innerWidth} tabs>
        <div label="About Me">
          <Avatar
            size={100}
            style={style.avatar}
          >
            Y
          </Avatar>
          <Paper style={style.paper} zDepth={1}>
            <div>About Me</div>
          </Paper>
        </div>
        <div label="My Vision">
          <Paper style={style.paper} zDepth={1}>
            <div>My Vision</div>
          </Paper>
        </div>
        <div label="My Goal">
          <Paper style={style.paper} zDepth={1}>
            <div>My Goal</div>
          </Paper>
        </div>
      </SwipeWrapper>
      <RedirectButton
        label="Know More"
        path="/about"
      />
    </div>
  </div>
);

export default AboutSection;
