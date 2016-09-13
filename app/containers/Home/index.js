import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CoverVideo from '../../components/coverVideo/index';
import PosterVideoMp4 from '../../common/coverVideo/cover.mp4';
import PosterVideoWebm from '../../common/coverVideo/cover.webm';
import PosterImg from '../../common/coverVideo/cover.jpg';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionWatchLater from 'material-ui/svg-icons/action/watch-later';
import ImageStyle from 'material-ui/svg-icons/image/style';
import EditorBubbleChart from 'material-ui/svg-icons/editor/bubble-chart';
import SwipeWrapper from '../SwipeWrapper/index';

import {
  redA200,
} from 'material-ui/styles/colors';
import messages from './messages';

import baseStyle from '../../common/Style/baseStyle.css';
import style from './styles.css';


class Home extends Component {
  render() {
    return (
      <div>
        <CoverVideo
          PosterImg={PosterImg}
          PosterVideoWebm={PosterVideoWebm}
          PosterVideoMp4={PosterVideoMp4}
          headerText={messages.headerText}
          subHeaderText={messages.subHeaderText}
          headerButtonText={messages.headerButtonText}
        />
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
        <Divider />
        <div className={[baseStyle.content, baseStyle.column, baseStyle.marginCenter].join(' ')}>
          <div className={[baseStyle.column, baseStyle.alignCenterCenter].join(' ')}>
            <p className={[baseStyle.caption].join(' ')}>Know Something</p>
            <h1 className={[baseStyle.title, baseStyle.upperCase].join(' ')}>Who am I</h1>
            <div className={baseStyle.alignSelfCenter} style={{ width: '60px' }}><Divider /></div>
          </div>
          <div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  pathname: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  pathname: ownProps.location.pathname,
});

export default connect(mapStateToProps)(Home);
