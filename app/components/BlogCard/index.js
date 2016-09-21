import React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import coverImage from '../../common/coverVideo/cover.jpg';
import IconButton from 'material-ui/IconButton';
// import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import {
  redA200,
} from 'material-ui/styles/colors';
// import baseStyle from '../../common/Style/baseStyle.css';

const blogCard = (() =>
  <Card>
    <CardMedia
      style={{
        margin: 5,
      }}
    >
      <img src={coverImage} alt="Cover" />
    </CardMedia>
    <CardTitle
      title="What is material design"
      subtitle="June 18, 2016"
    />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa.Aliquam erat volutpat.Nulla facilisi.
      Donec vulputate interdum sollicitudin.Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <IconButton>
        <ActionFavoriteBorder color={redA200} />
      </IconButton>

      <RaisedButton label="Full Story" secondary />
    </CardActions>
  </Card >
);

export default blogCard;
