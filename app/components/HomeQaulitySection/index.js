import React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionWatchLater from 'material-ui/svg-icons/action/watch-later';
import ImageStyle from 'material-ui/svg-icons/image/style';
import EditorBubbleChart from 'material-ui/svg-icons/editor/bubble-chart';
import {
  redA200,
} from 'material-ui/styles/colors';
import SwipeWrapper from '../../containers/SwipeWrapper/index';

import baseStyle from '../../common/Style/baseStyle.css';

const qualitySection = (() =>
  <SwipeWrapper>
    <div className={[baseStyle.column, baseStyle.alignCenterCenter].join(' ')}>
      <IconButton>
        <ActionFavorite color={redA200} />
      </IconButton>
      <h1 className={[baseStyle.title].join(' ')}>Passionate</h1>
      <p className={[baseStyle.caption].join(' ')}>It is the best think to be in sync with the latest technology</p>
    </div>
    <div className={[baseStyle.column, baseStyle.alignCenterCenter].join(' ')}>
      <IconButton>
        <ActionWatchLater color={redA200} />
      </IconButton>
      <h1 className={[baseStyle.title].join(' ')}>Up-to-date</h1>
      <p className={[baseStyle.caption].join(' ')}>It is the best think to be in sync with the latest technology</p>
    </div>
    <div className={[baseStyle.column, baseStyle.alignCenterCenter].join(' ')}>
      <IconButton>
        <ImageStyle color={redA200} />
      </IconButton>
      <h1 className={[baseStyle.title].join(' ')}>Creative</h1>
      <p className={[baseStyle.caption].join(' ')}>It is the best think to be in sync with the latest technology</p>
    </div>
    <div className={[baseStyle.column, baseStyle.alignCenterCenter].join(' ')}>
      <IconButton>
        <EditorBubbleChart color={redA200} />
      </IconButton>
      <h1 className={[baseStyle.title].join(' ')}>Strategist</h1>
      <p className={[baseStyle.caption].join(' ')}>It is the best think to be in sync with the latest technology</p>
    </div>
  </SwipeWrapper>
);

export default qualitySection;
