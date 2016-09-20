import React from 'react';
import Title from '../Title/index';
import RedirectButton from '../RedirectButton/index';
import baseStyle from '../../common/Style/baseStyle.css';
import Paper from 'material-ui/Paper';
import SwipeWrapper from '../../containers/SwipeWrapper/index';

const style = {
  paper: {
    height: 400,
    margin: 10,
    textAlign: 'center',
    display: 'flex',
    flex: 1,
  },
};


const BlogSection = (() =>
  <div className={baseStyle.wrapper}>
    <Title
      caption="Here are Some of"
      title="Latest Blog Posts"
    />
    <SwipeWrapper minWidth={600} navigation>
      <Paper style={style.paper} zDepth={1}>
        hello
      </Paper>
      <Paper style={style.paper} zDepth={1}>
        hello
      </Paper>
    </SwipeWrapper>
    <RedirectButton
      label="Read More"
      path="/blog"
    />
  </div>
);

export default BlogSection;
