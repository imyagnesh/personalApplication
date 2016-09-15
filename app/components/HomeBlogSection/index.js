import React from 'react';
import Title from '../Title/index';
import RedirectButton from '../RedirectButton/index';
import baseStyle from '../../common/Style/baseStyle.css';


const BlogSection = (() =>
  <div className={[baseStyle.content, baseStyle.column, baseStyle.marginCenter].join(' ')}>
    <Title
      caption="Here are Some of"
      title="Latest Blog Posts"
    />
    <RedirectButton
      label="Read More"
      path="/blog"
    />
  </div>
);

export default BlogSection;
