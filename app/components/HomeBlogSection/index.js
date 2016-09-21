import React from 'react';
import Title from '../Title/index';
import RedirectButton from '../RedirectButton/index';
import baseStyle from '../../common/Style/baseStyle.css';
import SwipeWrapper from '../../containers/SwipeWrapper/index';
import BlogCard from '../BlogCard/index';

const BlogSection = (() =>
  <div className={baseStyle.wrapper}>
    <Title
      caption="Here are Some of"
      title="Latest Blog Posts"
    />
    <SwipeWrapper minWidth={300} navigation>
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </SwipeWrapper>
    <RedirectButton
      label="Read More"
      path="/blog"
    />
  </div>
);

export default BlogSection;
