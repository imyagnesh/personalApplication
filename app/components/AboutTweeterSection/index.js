import React, {
  PropTypes,
} from 'react';
import { CardMedia, CardTitle } from 'material-ui/Card';

const TweeterSection = ({ tweets }) => {
  const indents = [];
  for (let i = 0; i < tweets.length; i++) {
    indents.push(<CardMedia key={i}
      overlay={<CardTitle title={tweets[i].text} />}
    >
      <img src="images/nature-600-337.jpg" alt="cover" />
    </CardMedia>);
  }
  return (
    <div>
      {indents}
    </div>
  );
};

TweeterSection.propTypes = {
  tweets: PropTypes.array.isRequired,
};

export default TweeterSection;
