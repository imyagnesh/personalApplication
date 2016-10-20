import React, {
  PropTypes,
} from 'react';
import { CardMedia } from 'material-ui/Card';

const InstaSection = ({ instaImages }) => {
  return (
    <div>
      {
        instaImages.map((img, index) =>
          <CardMedia
            key={index}
            style={{ height: img.height, width: img.width }}
          >
            <img src={img.url} alt="img" />
          </CardMedia>
        )
      }
    </div>
  );
};

InstaSection.propTypes = {
  instaImages: PropTypes.array.isRequired,
};

export default InstaSection;
