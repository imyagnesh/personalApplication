import React from 'react';
import { Card, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import coverImage from '../../common/coverVideo/cover.jpg';
// import baseStyle from '../../common/Style/baseStyle.css';

const componentName = (() =>
  <Card>
    <CardHeader
      title="URL Avatar"
    />
    <CardMedia>
      <img src={coverImage} alt="Cover" style={{ height: 220 }} />
    </CardMedia>
    <CardTitle
      title="Card title"
      subtitle="Card subtitle"
    />
  </Card>
);

export default componentName;
